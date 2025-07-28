import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { account } from "../lib/appwrite";
import background from "../assets/Rubber Farm Image7.png";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Verification() {
  const location = useLocation();
  const [status, setStatus] = useState("error");
  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const query = new URLSearchParams(location.search);
        const userId = query.get("userId");
        const secret = query.get("secret");
        if (!userId || !secret) {
          console.log("Missing verification data");
          setTimeout(() => {
            window.location.href = "https://www.google.com/";
          }, 1000);
          alert("Missing data");
          return;
        }

        const response = await account.updateVerification(userId, secret);
        console.log("Verification success:", response);
        setStatus("success");
      } catch (error) {
        console.error("Verification failed:", error);
        setStatus("error");
      }
    };

    verifyAccount();
  }, [location.search]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 flex flex-col items-center justify-center text-center max-w-md w-full mx-4">
        {status === "loading" && (
          <>
            <ArrowPathIcon className="animate-spin text-gray-500 h-16 w-16 mb-4" />
            <p className="text-gray-700 text-lg font-medium">
              Verifying your account...
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircleIcon className="text-green-600 h-16 w-16 mb-4" />
            <p className="text-green-700 text-lg font-bold">
              Your email has been successfully verified!
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <XCircleIcon className="text-red-600 h-16 w-16 mb-4" />
            <p className="text-red-700 text-lg font-bold">
              Verification failed. Please try again or check your link.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
