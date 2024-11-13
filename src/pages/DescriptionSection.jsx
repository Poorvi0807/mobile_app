import React from 'react';
import './DescriptionSection.css';
import { FaCheckCircle } from 'react-icons/fa'; // Importing check icon

function DescriptionSection() {
  return (
    <div className="description-section">
      <div className="description-content">
        <h2>Description</h2>
        <p>Hello Friends 👋</p>
        <p>
          Achieving your goals is now simpler than ever with Beetroot. Take control of your habits by setting personalized goals, receiving timely reminders, and effortlessly tracking your progress. The app records your journey and provides insights to help you build a healthier, more organized life. It addresses several challenges, from maintaining consistency to monitoring your overall progress. Your path to a better you has never been this straightforward!
        </p>
        <p>
          I also want to share my exploration of our app's features. You can set specific quitting goals, find tips for overcoming cravings, and access support resources whenever you need them. I hope you guys find it useful. <br/>
          Feel free to comment!
        </p>
        <p>
          🔥 Checkout our other product - <a href="https://ui8.net/omega-orion/products/forgo---quit-smoking-app" target="_blank" rel="noopener noreferrer">https://ui8.net/omega-orion/products/forgo---quit-smoking-app</a> 📱
        </p>
      </div>

      <div className="features-format">
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li><FaCheckCircle /> 120+ Screens</li>
            <li><FaCheckCircle /> Fully customizable designs</li>
            <li><FaCheckCircle /> Organized Design system</li>
            <li><FaCheckCircle /> Light & Dark mode</li>
            <li><FaCheckCircle /> Customized Illustration</li>
            <li><FaCheckCircle /> Neatly Organized layer</li>
          </ul>
        </div>

        <div className="format">
          <h3>Format</h3>
          <p>
            <img src="https://via.placeholder.com/20" alt="File icon" /> {/* Replace with actual icon URL */}
            15.2mb
          </p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;