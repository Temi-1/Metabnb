import React from 'react';
import MainNav from '../components/MainNav';
import Hero from '../components/Hero';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Purple from '../components/Purple';

function Meta() {
  return (
    <div className='metaHome'>
        <MainNav />
        <Hero />
        <Home />
        <Purple />
        <Footer />
    </div>
  )
}

export default Meta