import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verification from "../component/Verification.jsx";
import ForgotPassword from "../component/ForgotPassword.jsx";
import NotFound from "../component/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Verification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
