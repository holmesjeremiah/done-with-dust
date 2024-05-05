import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './Components/Navbar/CustomNav';
import Banner from './Components/Banner';


import AboutUs from './Components/AboutUs';
import Section from './Components/Elements/Section';
import { pricing, services } from './SiteData';

function App() {
  return (
    <div>
      <CustomNav />
      <Banner />
      <Section id={'services'} title={'Services'} background={'#242424'} titleTextColor={'#f17a96'} titleBorderColor={'#fff'} data={services} />
      <Section id={'pricing'} title={'Pricing'} background={'linear-gradient(to right, #f17a96, #fad0c4)'} titleTextColor={'#fff'} titleBorderColor={'#fff'} data={pricing} />
      <AboutUs />
    </div>

  );
}

export default App;
