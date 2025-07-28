import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verification from "../component/Verification.jsx";
import ForgotPassword from "../component/ForgotPassword.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Verification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="https://www.google.com" />} />
      </Routes>
    </BrowserRouter>
  );
}
