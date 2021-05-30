//example of contextApi-contextapi is used for pass properti to the particular components.
// context api allows you to easily access data at diffrent level of component tree without passing prop to every level
// import React, { createContext } from 'react';
// import ComA from './ComA';

// const FirstName=createContext();
// const LastName=createContext();
// const App=()=>{

//   return(<>
//     <FirstName.Provider value={'vinod'}>
//       <LastName.Provider value={'thapa'}>
//         <ComA/>
//         </LastName.Provider>
//     </FirstName.Provider>
      
//   </>);

// };
// export default App;
// export {FirstName,LastName};




//example of useeffect-useeffect automatically call after render method.
// import React from 'react';
// import UseEffect from './UseEffect';
// const App=()=>{
  
//   return(
//   <>
//     <UseEffect/>
//   </>);

// };
// export default App;


//how to call api in react 
//first install npm install axios
//than open pokemon.co to get api
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App=()=>{
//   const[num,setnum]=useState();
// const[name,setname]=useState();
// const[move,setmove]=useState();
// useEffect(()=>{
//   async function setdata(){
//     const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
//     setname(res.data.name);
//     setmove(res.data.moves.length);
//   }
// setdata();
// });

// const getdata=(event)=>{
// setnum(event.target.value);
// }
//   return(<>
//     <h1>you choose<span style={{color:'red'}}>{num}</span></h1>
//     <h1>my name is<span style={{color:'red'}}>{name}</span></h1>
//     <h1>i have<span style={{color:'red'}}>{move}</span>moves</h1>
//     <select value={num} onChange={getdata}>
//       <option value='1'>1</option>
//       <option value='25'>25</option>
//       <option value='3'>3</option>
//       <option value='4'>4</option>
//       <option value='5'>5</option>
//     </select>
//   </>);

// };
// export default page


// router example
// import React from 'react';
// import {Route, Switch,Redirect} from 'react-router-dom';
// import Contact from './Contact';
// import About from './About';
// import Menu from './Menu';
// // import Error from './Error';
// const App=()=>{
// return(<>
// <Menu/>
// <br></br>
// <br></br>
// <Switch> 
//    <Route exact path='/' component={About} />        
//     <Route path='/contact' component={Contact} />
//     {/* <Route component={Error} /> */}
//     <Redirect to="/"/>
// </Switch>

// </>);

// };
// export default App;


// react component vs react render
// the key difference beteween react component and react render is that in react component  every time 
// call new component but in react render first time call component and than only change propertie value 



// import React from 'react';
// import {Route, Switch} from 'react-router-dom';
// import Contact from './Contact';
// import About from './About';
// import Menu from './Menu';

// const App=()=>{
// return(<>
// <Menu/>
// <br></br>
// <br></br>
// <Switch> 
//    <Route exact path='/' render={()=><About name="about"/>} />       
//     <Route path='/contact' render={()=><Contact name="contact"/>}/>
// </Switch>

// </>);

// };
// export default App;
//


//useParams,uselocation,usehistory
// import React from 'react';
// import {Route, Switch} from 'react-router-dom';
// import Contact from './Contact';
// import About from './About';
// import User from './User';
// import Menu from './Menu';

// const App=()=>{
// return(<>
// <Menu/>
// <br></br>
// <br></br>
// <Switch> 
//    <Route exact path='/' render={()=><About name="about"/>} />       
//     <Route path='/contact' render={()=><Contact name="contact"/>}/>
//     <Route path='/user/:demo/:fname' component={User}/>
// </Switch>

// </>);

// };
// export default App;

// create search option

// import React, { useState } from 'react';
// import Search from './Search';
// const App=()=>{
//     const [name,setname]=useState();
//     const onSearch=(event)=>{
//         setname(event.target.value);
//     }
//         return(<>
//         <div>
//         <input type="text" placeholder="search anything" onChange={onSearch} value={name}/>
//         <div><Search dummy={name}/></div>
//         </div>
//     </>);
// }
// export default App;