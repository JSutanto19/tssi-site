import React, { useState } from 'react';
import Background from './Background';
import Navbar from './Navbar';
import Hero from './Hero';

function Home() {
  const [heroCount, setHeroCount] = useState(0);

  const heroData = [
    { text1: "Engineering", text2: "Excellence" },
    { text1: "Designing A ", text2: "Better Tomorrow" },
  ];

  return (
    <div>
      <Background heroCount={heroCount} />
      <Hero
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  );
}

export default Home;
