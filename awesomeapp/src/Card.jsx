import React from 'react';

function Card(props){
    return(
        <>
            {/* <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="mypic" className="card__img"/>
                    <div className="card__info">
                        <span className="card__category">{props.title}</span>
                        <h3 className='card__title'>{props.sname}</h3>
                        <a href={props.link}>
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>

            </div> */}
            {/* <div className="container " > */}
           
            <div className="card col mb-4">
                <div className="card h-100">
                    <img src={props.imgsrc} className="card-img-top" alt="mypic"/>
                    <div className="card-body">
                        <span className="card-title">{props.title}</span>
                        <h3 className="card-text">{props.sname}</h3>
                        <a href={props.link} className="btn btn-primary">watch now</a>
                    </div>
                    </div>
            </div>
            
            
            
        </> 
    )
}

export default Card;