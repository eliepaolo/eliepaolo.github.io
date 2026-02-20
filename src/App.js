import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ComingSoon from "./pages/ComingSoon";
import Layout from "./Layout"; // il tuo layout con navbar
import Home from "./pages/Home";
import Cerimonia from "./pages/Cerimonia";
import Ricevimento from "./pages/Ricevimento";
import Pernottamento from "./pages/Pernottamento";
import Canti from "./pages/Canti";
import ListaNozze from "./pages/ListaNozze";
import RSVP from "./pages/RSVP";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<ComingSoon />} />

        {/* Sito completo */}
        <Route path="/info" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cerimonia" element={<Cerimonia />} />
          <Route path="ricevimento" element={<Ricevimento />} />
          <Route path="pernottamento" element={<Pernottamento />} />
          <Route path="canti" element={<Canti />} />
          <Route path="lista-nozze" element={<ListaNozze />} />
          <Route path="rsvp" element={<RSVP />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;