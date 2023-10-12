import React, { useState } from 'react';
import { icons, illusts } from './images';
import Modal from './ImageModal';
import './Illust.css';


function Illust() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);


  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  const images = illusts.map((image, index) => (
    <div key={index} className='grid-item'>
      <img
        src={image}
        alt={`${index + 1}`}
        onClick={() => openModal(index)}
        className='grid-image'
      />
    </div>
  ));

  return (
    <div className='Illust'>
      <div className='page-title'>
        <img src={icons.sparkleTitle} alt='Sparkle' />
        <div>ILLUSTRATION</div>
        <img src={icons.sparkleTitle} alt='Sparkle' />
      </div>

      <div className='illusts'>
        <div className='grid-container'>
          {images}
        </div>
      </div>

      {modalOpen && (
        <Modal 
          images={illusts} 
          index={currentImageIndex} 
          close={closeModal} 
        />
      )}

    </div>
  );
}

export default Illust;
