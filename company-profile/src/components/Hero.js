import React from 'react';
import '/Users/jason_sutanto/CompanyProfile-/company-profile/src/styles/Hero.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = ({ heroData, setHeroCount, heroCount }) => {
  const handlePrevClick = () => {
    setHeroCount((prevCount) => (prevCount === 0 ? heroData.length - 1 : prevCount - 1));
  };

  const handleNextClick = () => {
    setHeroCount((prevCount) => (prevCount === heroData.length - 1 ? 0 : prevCount + 1));
  };

  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>{heroData[heroCount].text1}</p>
        <p>{heroData[heroCount].text2}</p>
      </div>

      <div className='hero-arrow-controls'>
        <button className='hero-arrow' onClick={handlePrevClick}>
          <i className="fa-solid fa-circle-arrow-left"></i>
        </button>
        <button className='hero-arrow' onClick={handleNextClick}>
          <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Hero;
