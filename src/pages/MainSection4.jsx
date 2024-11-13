import React from 'react'
import './MainSection4.css';
import image7 from '../assets/image7.png'; 
import image8 from '../assets/image8.png';

const MainSection4 = () => {
  return (
    <section className="main-section">
    <div className="images-content">
      <img src={image7} alt="Preview 1" className="image" />
      <img src={image8} alt="Preview 2" className="image" />
    </div>
  </section>
  )
}

export default MainSection4
