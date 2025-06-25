// import React, { useEffect, useState } from "react";
// import { YOUTUBE_COMMENTS_API } from "../utils/constant";

// const Comments = ({ videoId }) => {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     getComments();
//   }, []);

//   const getComments = async () => {
//     const data = await fetch(YOUTUBE_COMMENTS_API(videoId));
//     const json = await data.json();
//     setComments(json.items);
//   };

//   return (
//     <div>
//       <h2>Top Comments</h2>
//       {comments.map((comment) => {
//         const snippet = comment.snippet.topLevelComment.snippet;
//         return (
//           <div key={comment.id} style={{ marginBottom: "20px" }}>
//             <img
//               src={snippet.authorProfileImageUrl}
//               alt="Avatar"
//               style={{ width: "40px", borderRadius: "50%", verticalAlign: "middle", marginRight: "10px" }}
//             />
//             <strong>{snippet.authorDisplayName}</strong>
//             <p dangerouslySetInnerHTML={{ __html: snippet.textDisplay }} />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Comments;

import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constant"; // update path if needed

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!videoId) return;

    const fetchComments = async () => {
      try {
        const res = await fetch(YOUTUBE_COMMENTS_API(videoId));
        const data = await res.json();
        setComments(data.items || []);
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };

    fetchComments();
  }, [videoId]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Top Comments</h2>
      {comments.map((comment) => {
        const snippet = comment.snippet.topLevelComment.snippet;
        return (
          <div key={comment.id} className="flex gap-4 mb-6">
            {/* Avatar */}
            <img
              src={snippet.authorProfileImageUrl}
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />

            {/* Comment Content */}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">
                  {snippet.authorDisplayName}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(snippet.publishedAt).toLocaleDateString()}
                </span>
              </div>

              <p
                className="text-sm mt-1"
                dangerouslySetInnerHTML={{ __html: snippet.textDisplay }}
              />

              <div className="flex items-center gap-4 mt-2 text-gray-600 text-sm">
                <span>👍 {snippet.likeCount}</span>
                <button className="hover:underline">Reply</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
