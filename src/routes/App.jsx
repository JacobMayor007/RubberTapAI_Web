import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verification from "../component/Verification.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Verification />} />
      </Routes>
    </BrowserRouter>
  );
}
