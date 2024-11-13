// import React from 'react';
// import './MainSection.css';
// import desktopImage from '../assets/desktopImage.png'; // Add your desktop image path
// import tabletImage from '../assets/tabletImage.png';   // Add your tablet image path
// // import mobileImage from './assets/mobileImage.png';   // Add your mobile image path

// const MainSection = () => {
//   return (
//     <section className="main-section">
//       <div className="text-content">
//         <h1>Pixel Bloom: Crafting Next-Gen AI Models</h1>
//         <p>
//           Pixel Bloom is transforming industries with advanced AI models that drive innovation and efficiency. Their solutions empower businesses to harness AI for groundbreaking outcomes.
//         </p>
//         <ul className="features-list">
//           <li>✅ Reusable Components</li>
//           <li>✅ Fully Components & Variants</li>
//           <li>✅ Implementation Figma Variable</li>
//           <li>✅ Responsive View & Style Guide</li>
//           <li>✅ Dark Mode and Light Mode</li>
//         </ul>
//       </div>

//       <div className="images-content">
//         <img src={desktopImage} alt="Desktop View" className="image desktop" />
//         <img src={tabletImage} alt="Tablet View" className="image tablet" />
//         {/* <img src={mobileImage} alt="Mobile View" className="image mobile" /> */}
//       </div>
//     </section>
//   );
// };

// export default MainSection;

// src/MainSection.js

import React from 'react';
import './MainSection2.css';
import image1 from '../assets/desktopImage.png'; 
import image2 from '../assets/tabletImage.png';

const MainSection = () => {
  return (
    <section className="main-section">
      {/* <div className="text-content"> */}
        {/* <h1>Pixel Bloom: Crafting Next-Gen AI Models</h1>
        <p>
          Pixel Bloom is transforming industries with advanced AI models that drive innovation and efficiency. Their solutions empower businesses to harness AI for groundbreaking outcomes.
        </p>
        <ul className="features-list">
          <li>✅ Reusable Components</li>
          <li>✅ Fully Components & Variants</li>
          <li>✅ Implementation Figma Variable</li>
          <li>✅ Responsive View & Style Guide</li>
          <li>✅ Dark Mode and Light Mode</li>
        </ul>
      </div> */}

      <div className="images-content">
        <img src={image1} alt="Preview 1" className="image" />
        <img src={image2} alt="Preview 2" className="image" />
      </div>
    </section>
  );
};

export default MainSection;
