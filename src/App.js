import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Main';
import SideBar from './SideBar';
import Illust from './Illust';
import Virtual from './Virtual';
import CharacterDesign from './CharacterDesign';
import Top from './Top';
import MobileMenu from './MobileMenu';


function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
  <BrowserRouter>
    <div className="App">
      <div className='SidebarAndTop'>
        <SideBar className='SideBar'/>
        <Top onMenuButtonClick={openMenu} className='Top'/>
      </div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/illustration" element={<Illust />}></Route>
        <Route path="/virtual-illust" element={<Virtual />}></Route>
        <Route path="/character-design" element={<CharacterDesign />}></Route>
      </Routes>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  </BrowserRouter>
  );
}

export default App;
