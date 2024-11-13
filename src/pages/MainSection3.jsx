import React from 'react'
import './MainSection3.css';
import image5 from '../assets/image5.png'; 
import image6 from '../assets/image6.png';

const MainSection3 = () => {
  return (
    <section className="main-section">
    <div className="images-content">
      <img src={image5} alt="Preview 1" className="image" />
      <img src={image6} alt="Preview 2" className="image" />
    </div>
  </section>
  )
}

export default MainSection3
