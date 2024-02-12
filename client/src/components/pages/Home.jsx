import React from 'react';
import '../../App.scss';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import About from '../About';


function Home() {
    return (
      <>
        <HeroSection />
        <Cards />
        <About/>
        <Footer/>
    </>
  );
}

export default Home;
