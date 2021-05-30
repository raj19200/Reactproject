import React, { useState } from 'react';

const Contact = () => {
  const [getsubmit,setsubmit]=useState(()=>{
    return{
      fname:"",
      mno:"",
      email:""
  }
  });
  const submitpage=(event)=>{
    event.preventDefault();
    alert("page submited");
  }
  const getcontact=(event)=>{
      const{name,value}=event.target;
      setsubmit((preVal)=>{
        return{
        ...preVal,
        [name]:value
        }
      })
  }
  return (<>

    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container ">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={submitpage}>
            <div className="form-group">
              <label htmlFor="exampleInputname">Name</label>
              <input type="text" className="form-control" id="exampleInputname" aria-describedby="nameHelp" name="fname" value={getsubmit.fname} onChange={getcontact} />
              
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputmobile">Mobile no</label>
              <input type="text" className="form-control" id="exampleInputmobile" name="mno" value={getsubmit.mno} onChange={getcontact} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputemail">Email id</label>
              <input type="text" className="form-control" id="exampleInputemail" name="email" value={getsubmit.email} onChange={getcontact} />
            </div>

            <input type="submit" className="btn btn-primary" value="submit" />
          </form>
        </div>
      </div>
    </div>


  </>);
}

export default Contact;

