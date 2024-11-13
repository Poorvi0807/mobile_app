import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src="logo.png" alt="logo" className="logo" />
                <nav className="nav">
                    <a href="#explore" className="nav-link">Explore</a>
                    <a href="#faqs" className="nav-link">FAQ's</a>
                    <a href="#pricing" className="nav-link">Pricing</a>
                </nav>
            </div>
            <div className="header-center">
                <h1 className="title">Pixel Bloom: AI website agency</h1>
                <p className="subtitle">Habit Tracker App Figma iOS UI Kit</p>
            </div>
            <div className="header-right">
                <button className="feedback-button">Give feedback</button>
                <button className="cart-button">Add to cart $20</button>
                <div className="profile-icon">
                    <img src="profile.jpg" alt="User" className="profile-image" />
                </div>
            </div>
        </header>
    );
};

export default Header;