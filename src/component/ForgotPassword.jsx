import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import { account } from "../lib/appwrite";
import "@ant-design/v5-patch-for-react-19";
export default function ForgotPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [hide, setHide] = useState(true);
  const [hideTwo, setHideTwo] = useState(true);
  const [modal, setModal] = useState(false);
  const query = new URLSearchParams(location.search);
  const userId = query.get("userId");
  const secret = query.get("secret");

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        if (!userId || !secret) {
          ("Missing verification data");
          alert("Missing data");
          setTimeout(() => {
            navigate("https://www.google.com/");
          }, 1000);
          return;
        }
      } catch (error) {
        console.error(error);
      }
    };

    verifyAccount();
  }, [location.search]);

  const changePassword = async () => {
    try {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

      if (!regex.test(password || password.length < 9)) {
        alert(
          "Password must be at least 8 characters, one symbol, and one capital letter"
        );
        return;
      }

      if (password !== confirm) {
        alert("New Password must be the same as Confirm New Password");
        return;
      }

      const promise = await account.updateRecovery(userId, secret, confirm);

      if (promise.onOk) {
        alert(
          "Password Successfully Change. You can go back to RubberTapAI app now."
        );
        navigate(-1);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 bg-[#FFECCC] h-screen">
      <img src="/Logo.png" alt="Logo" className="h-24 w-24" />
      <div>
        <p className="flex flex-row items-end font-[Poppins] text-[#75A90A] font-extrabold text-xl">
          <span className=" text-4xl">R</span>ubberTap
        </p>
        <p className="font-[Poppins] text-[#75A90A] text-xl font-medium text-right">
          AI
        </p>
      </div>
      <h1 className="font-[Poppins] text-xl font-bold text-[#3F1F11] mt-10 mb-5">
        Password Reset
      </h1>
      <div className="border-[1px] border-[#046A10] w-full rounded-md h-11 px-2 gap-2 flex-row flex items-center">
        <input
          name="password"
          id="password"
          type={hide ? "password" : "text"}
          value={password}
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
          className=" w-full rounded-md h-11 outline-none"
        />
        <div onClick={() => setHide((prev) => !prev)}>
          {hide ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="border-[1px] my-4 border-[#046A10] w-full rounded-md h-11 px-2 gap-2 flex-row flex items-center">
        <input
          name="password"
          id="confirm-password"
          type={hideTwo ? "password" : "text"}
          value={confirm}
          placeholder="Confirm New Password"
          onChange={(e) => setConfirm(e.target.value)}
          className=" w-full rounded-md h-11 outline-none"
        />
        <div onClick={() => setHideTwo((prev) => !prev)}>
          {hideTwo ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setModal(true)}
        className="w-full bg-[#6B8E23] text-white h-10 font-[Poppins] rounded-md cursor-pointer"
      >
        Confirm
      </button>
      <Modal
        onCancel={() => setModal(false)}
        onOk={changePassword}
        open={modal}
        centered
      >
        <h1>Confirm New Password?</h1>
      </Modal>
    </div>
  );
}
