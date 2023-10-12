import React, { useState } from 'react';
import X from './assets/icons/X.svg';
import Next from './assets/icons/next.svg';
import Previous from './assets/icons/previous.svg';
import { icons, characterDesigns } from './images';
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

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < characterDesigns.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };


  return (
    <div className='CharacterDesign'>
      
      <div className='page-title'>
        <img className="sparkle-title" src={icons.sparkleTitle} alt="sparkle"/>
        <div>CHARACTER DESIGN</div>
        <img className="sparkle-title" src={icons.sparkleTitle} alt="sparkle"/>
      </div>

      <div className="illusts">
        <div className="grid-container-CD">
          {characterDesigns.map((image, index) => (
            <div key={index} className="grid-item">
              <img
                src={image}
                alt={`${index + 1}`}
                onClick={() => openModal(index)}
                className="grid-image"
              />
            </div>
          ))}
        </div>
      </div>

          {modalOpen && (
            <div className="illust-modal">
              <button className="close-button" onClick={closeModal}>
                <img src={X} className='close-img' alt='close'/>
              </button>
              <div className="modal-buttons">
                <button className="prev-button" onClick={prevImage}>
                  <img src={Previous} className="prev-img" alt="previous" />
                </button>
                <button className="next-button" onClick={nextImage}>
                  <img src={Next} className="next-img" alt="next" />
                </button>
              </div>
              <img
                className="modal-image"
                src={characterDesigns[currentImageIndex]}
                alt={`${currentImageIndex + 1}`}
              />
              
            </div>
          )}
    
    </div>
  );
}

export default CharacterDesign;