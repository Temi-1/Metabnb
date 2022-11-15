import React from 'react'

export default function Modal({ closeModal }) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <p onClick={() => closeModal(false)}>x</p>
            <p>Testing</p>
        </div>
    </div>
  )
}

