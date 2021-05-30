import React, { useState, useEffect } from 'react';

function UseEffect(){
    const [num,setnum]=useState(0);
     useEffect(()=>{
         alert("i have cliked");
        document.title=`you  clicked me ${num} times`;
    })
    const onclick=()=>{
        setnum(num+1)
    }
    return(<>
        <button onClick={onclick}>Click me {num}</button>
    </>);
};
export default UseEffect;