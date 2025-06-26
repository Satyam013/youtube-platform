import React from "react";
import { Construction, AlertCircle } from "lucide-react";
import Button from "../UI/Button";

const UnderDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center p-6">
      <div className="max-w-md text-center bg-gray-950 border border-gray-700 shadow-xl rounded-2xl p-8 space-y-6 animate-fadeIn">
        <div className="flex flex-col items-center gap-3">
          <Construction size={48} className="text-yellow-400 animate-pulse" />
          <h1 className="text-3xl font-bold">Page Under Development</h1>
          <p className="text-gray-300">
            This section is currently being crafted with care. Come back soon to
            explore the new experience!
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            className="rounded-xl bg-yellow-500 text-black hover:bg-yellow-400 px-4 py-2 transition-all flex items-center gap-2"
            onClick={() => window.history.back()}
          >
            <AlertCircle size={18} />
            Go Back
          </Button>
        </div>

        <div className="text-xs text-gray-500">
          🚧 Built with ❤️ by Dev Team – Expected update soon!
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
