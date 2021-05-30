import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Sdata from './Sdata';


ReactDOM.render(
  <>
  <h1 className="shadow p-3 mb-5 bg-white rounded text-danger text-center">List of Top Four Netflix Series</h1>
  <div className="container">
   <div className="row row-cols-1 row-cols-md-3">
       {/* by using simple function  */}
    {/* {Sdata.map(function(val){
      return (
        <Card 
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        /> 
      );
    })}    */}
    {/* by using fat arrow function */}
    {Sdata.map((val)=>{
      return(
        <Card 
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
    
    </div> 
    </div>  

  </>
  ,document.getElementById('root'));
  serviceWorker.unregister();