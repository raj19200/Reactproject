// import React, { useState } from 'react';
//  display  current time using hooks---------------------------------------------------------- 
// const App =()=>{
//   let t=new Date().toLocaleTimeString();
//   const[ctime,setCtime]=useState(t);
//   const GetTime=()=>{
//     t=new Date().toLocaleTimeString();
//     setCtime(t);
//   };
//   setInterval(GetTime,1000);
//   return(
//     <>
//       <h1>{ctime}</h1>
//       {/* <button onClick={GetTime} className="btn btn-success">Time</button> */}
//     </>
//   );

// };
// export default App;


// ---------------------------------------------------------------------------------------------------

// login form or register form
// import React, { useState } from 'react';
// function App(){
//     const [fullname,setfullname]=useState(()=>{
//       return{
//       fname:"",
//       lname:"",
//       email:"",
//       number:"",
//     };
//     });
    
//     const demo=(event)=>{
//       const {name,value}=event.target;
//       setfullname((preVal)=>{
//         return{
//           ...preVal,
//           [name]:value
//         }
//       })    
//     }
    
//     const clickme=(event)=>{
//       event.preventDefault();
//       alert("form submited");
//     }
  
//     return(
//       <>
//       <form onSubmit={clickme}>
//         <h1>Hello {fullname.fname}   {fullname.lname}</h1>
//         <h1>{fullname.email}</h1>
//         <h1>{fullname.number}</h1>
//         <input type="text" placeholder="enter your first name" name="fname" onChange={demo} value={fullname.fname}/>
//         <input type="text" placeholder="enter your last name" name="lname" onChange={demo} value={fullname.lname}/>
//         <input type="text" placeholder="enter your Email address" name="email" onChange={demo} value={fullname.email}/>
//         <input type="number" placeholder="enter your mobile number" name="number" onChange={demo} value={fullname.number}/>
//         <button type="submit">click me</button>
//         </form>
//       </>
//     );
//   };
//   export default App;


// -----------------------------------------------------------------------------------------------------------------------------
// increment and decrement using hooks
// import React, { useState } from 'react';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Tooltip from '@material-ui/core/Tooltip';
// import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
// const App=()=>{
//   let count=0;
//   const[inc,inc1]=useState(count);
//   //const[inc,dec1]=useState("");
//   const increment=()=>{
//     console.log(inc);
//     let c=inc;
//     inc1(c=c+1);
//   }
  
//   const decrement=()=>{
    
//     let d=inc;
//     if(d>0){
//     inc1(d=d-1);
//     }
//     else{
//       alert("values are not accept in minus");
//     }
//   }
  
//   return(
//   <>
//   <Container maxWidth="sm">
//   <Paper elevation={3}>
//   <h1>{inc}</h1><br></br><br></br>
//   <Tooltip title="Add" aria-label="add">
//   <Button onClick={increment}><AddIcon/></Button>
//   </Tooltip>
//   <Tooltip title="Delete" aria-label="add">
//   <Button onClick={decrement}><DeleteIcon/></Button>
//   </Tooltip>
//   </Paper>
//   </Container>
//   </>);
// };
// export default App;