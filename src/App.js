import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cerimonia from './pages/Cerimonia';
import Ricevimento from './pages/Ricevimento';
import Pernottamento from './pages/Pernottamento';
import Canti from './pages/Canti';
import ListaNozze from './pages/ListaNozze';
import RSVP from './pages/RSVP';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cerimonia" element={<Cerimonia />} />
        <Route path="/ricevimento" element={<Ricevimento />} />
        <Route path="/pernottamento" element={<Pernottamento />} />
        <Route path="/canti" element={<Canti />} />
        <Route path="/lista-nozze" element={<ListaNozze />} />
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;