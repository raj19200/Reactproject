import React from 'react';
import Common from './Common';
import about from './img/about.jpg';

const About=()=>{
  return(<>

      <Common
       name="welcome to about page"
       visit="/contact"
       btname="Contact us"
       imgsrc={about}
      />
  </>);
}

export default About;