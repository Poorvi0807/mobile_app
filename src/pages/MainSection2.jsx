import React from 'react'
import './MainSection2.css'
import image3 from '../assets/image3.png'; // Replace with the path to your first image
import image4 from '../assets/image4.png'; // Replace with the path to your second image
const MainSection2 = () => {
  return (
    <section className="main-section">
    <div className="images-content">
      <img src={image3} alt="Preview 1" className="image" />
      <img src={image4} alt="Preview 2" className="image" />
    </div>
  </section>
  )
}

export default MainSection2
