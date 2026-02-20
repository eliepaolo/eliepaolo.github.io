import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;