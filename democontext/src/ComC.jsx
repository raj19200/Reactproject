import React, { useContext } from 'react';
import {FirstName,LastName} from './App';


const ComC=()=>{
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
   return(<>
    <h1>{fname}{lname}</h1>
  </>);

};
export default ComC;