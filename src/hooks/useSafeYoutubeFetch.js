import { useDispatch } from "react-redux";
import { setQuotaExceeded } from "../redux/apiQuotaSlice";

const useSafeYoutubeFetch = () => {
  const dispatch = useDispatch();

  const safeFetch = async (url) => {
    try {
      const res = await fetch(url);

      if (res.status === 403) {
        dispatch(setQuotaExceeded(true));
        return null;
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("API Fetch Error:", error);
      dispatch(setQuotaExceeded(true));
      return null;
    }
  };

  return safeFetch;
};

export default useSafeYoutubeFetch;
