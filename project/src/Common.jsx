import React from 'react';
import { NavLink } from 'react-router-dom';

const Common=(props)=>{
  return(<>
        <section id="header" className="d-flex align-items-center">
                  <div className="container-fluid">
                        <div className="row">
                              <div className="col-10 mx-auto">
                                    <div className="row">
                                          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                                <h1>
                                                     {props.name}<br></br><strong className="brand-name">     Raj Shah</strong>
                                                </h1>
                                                <h2 className="my-3">
                                                      Growing company in india.
                                                </h2>
                                                <div className="mt-3">
                                                      <NavLink className="btn btn-outline-success" to={props.visit}>{props.btname}</NavLink>
                                                </div>
                                          </div>
                                          <div className="col-lg-6 order-1 order-lg-2 header-img">
                                                <img src={props.imgsrc} className="img-fluid animated" alt="demo"/>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </section>

  </>);
}

export default Common;