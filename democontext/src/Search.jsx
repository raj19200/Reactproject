import React from 'react';
const Search=(props)=>{
    const demo=`https://source.unsplash.com/500x500/?${props.dummy}`;
    return(<>
        <img src={demo} alt="searchimage"/>
    </>);
}
export default Search;