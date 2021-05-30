import React from 'react';
import Common from './Common';
import home from './img/home.jpg';
const Home = () => {
      return (<>
            <Common
       name="Grow your business with"
       visit="/service"
       btname="Get started"
       imgsrc={home}
      />           

      </>);
}

export default Home;


/* <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">

            </div>
        </div>
  </div> */