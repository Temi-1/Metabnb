import { useState } from 'react';
import React from 'react'
import Modal from './Modal';

export default function MainNav() {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <nav className='navBar'>
                <div className='lNav'>
                    <img src="./images/main-icon.png" alt="site logo" />
                    {/* <h1>Metabnb</h1> */}
                </div>
                <div className='midNav'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Place to stay</a></li>
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