import React from 'react';
import { useParams,useLocation,useHistory } from 'react-router-dom';

const User=()=>{
    const {demo ,fname}=useParams();
    const loc=useLocation();
    const history=useHistory();
    return (<>
    <h1>this is {demo} {fname} page</h1>
    <h1>my current location is {loc.pathname}</h1>
    {loc.pathname==='/user/raj/shah'?<>
    <button onClick={()=>history.goBack()}>go back</button>
    <button onClick={()=>history.push('/')}>Home page</button></>
    :null}
    </>);
}
export default User;