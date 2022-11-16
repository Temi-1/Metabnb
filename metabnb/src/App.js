// import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Meta from './pages/Meta';
import Places from './pages/Places';
// import MainNav from './components/MainNav';
// import Hero from './components/Hero';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import Modal from './components/Modal';

function App() {

  // const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Meta />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
