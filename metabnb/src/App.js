// import { useState } from 'react';
import './App.css';
import MainNav from './components/MainNav';
import Hero from './components/hero';
import Home from './components/Home';
import Modal from './components/Modal';

function App() {

  // const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <MainNav />
      <Hero />
      <Home />
      {/* <button 
        className='openModalBtn'
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button> */}
      {/* {openModal && <Modal closeModal={setOpenModal} />}  */}
    </div>
  );
}

export default App;
