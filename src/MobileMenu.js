import React from "react";
import { NavLink } from "react-router-dom";
import './MobileMenu.css';
import X from './assets/icons/X.svg';

function MobileMenu({ onClose, isOpen }) {
  const handleModalClose = () => {
    onClose(); // 모달을 닫는 함수 호출
  };
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div>
      <div className="modal-background" style={modalStyle} onClick={onClose} /*배경 클릭 시 모달 닫기*/></div>
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <img src={X} alt='closed' className="x-img" onClick={onClose} />
        <div className="links">
        <NavLink to='/' onClick={handleModalClose} className={`link ${window.location.pathname === '/' ? 'active' : ''}`}>HOME</NavLink>
        <NavLink to='/illustration' onClick={handleModalClose} className={`link ${window.location.pathname === '/illustration' ? 'active' : ''}`}>ILLUSTRATION</NavLink>
        <NavLink to='/virtual-illust' onClick={handleModalClose} className={`link ${window.location.pathname === '/virtual-illust' ? 'active' : ''}`}>VIRTUAL ILLUST</NavLink>
        <NavLink to='/character-design' onClick={handleModalClose} className={`link ${window.location.pathname === '/character-design' ? 'active' : ''}`}>CHARACTER DESIGN</NavLink>

        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
