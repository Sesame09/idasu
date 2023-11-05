import React, { useState } from 'react';
import { icons, characterDesigns } from './images';
import Modal from './ImageModal';
import './CharacterDesign.css';


function CharacterDesign() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const images = characterDesigns.map((image, index) => (
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
    <div className='CharacterDesign'>
      
      <div className='page-title'>
        <img className="sparkle-title" src={icons.sparkleTitle} alt="sparkle"/>
        <div>CHARACTER DESIGN</div>
        <img className="sparkle-title" src={icons.sparkleTitle} alt="sparkle"/>
      </div>

      <div className='characterDesigns'>
        <div className='grid-container'>
          {images}
        </div>
      </div>

      {modalOpen && (
        <Modal 
          images={characterDesigns} 
          index={currentImageIndex} 
          close={closeModal} 
        />
      )}

    
    </div>
  );
}

export default CharacterDesign;