import { useState } from 'react';
import React from 'react';
import { Navigate } from "react-router-dom";
import Modal from './Modal';

export default function MainNav() {
    const [openModal, setOpenModal] = useState(false);

    const [goToPlaces, setGoToPlaces] = React.useState(false);

    if (goToPlaces) {
      return <Navigate to="/places" />;
    }
    return (
        <div>
            <nav className='navBar'>
                <div className='lNav'>
                    <img src="./images/main-icon.png" alt="site logo" />
                    {/* <h1>Metabnb</h1> */}
                </div>
                {/* <div className='navMenu'> */}
                    <div className='midNav'>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li>
                                <a 
                                    href="" 
                                    id="places" 
                                    onClick={() => {
                                        setGoToPlaces(true);
                                    }}
                                    >
                                    {" "}
                                    Place to stay
                                </a>
                            </li>
                            <li><a href="#">NFTs</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>
                    <div className='rNav'>
                        <button 
                            className='openModalBtn'
                            onClick={() => {
                              setOpenModal(true);
                            }}
                        >
                            Connect Wallet
                        </button>
                    </div>
                
            </nav>
            {openModal && <Modal closeModal={setOpenModal} />}
        </div>
    )
}