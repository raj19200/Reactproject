import React from 'react';
import {NavLink} from 'react-router-dom';
const Menu=()=>{
    return(<>
        <NavLink exact activeClassName="highlite" to="/">About us</NavLink>
        <NavLink activeClassName="highlite" to="/contact">contact page</NavLink>
        <NavLink activeClassName="highlite" to="/user">User</NavLink>
    </>);
};
export default Menu;