import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import headerImage from '../images/HeaderImage.png';

const Home = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/products');
  };

  return (
    <div className="home-container">
      <header className="header">
        <img src={headerImage} alt="Header" className="header-image" />
        <div className="header-content">
          <h1>Welcome to Sportify</h1>
          <p>Discover the latest in sports gear and apparel at Sportify, your ultimate online destination for all things sports. At Sportify, we pride ourselves on offering a carefully curated selection of premium quality products that cater to athletes and fitness enthusiasts of all levels.</p>
          <button className="shop-now-button" onClick={handleShopNowClick}>Shop Now</button>
        </div>
      </header>
    </div>
  );
};

export default Home;
