import React, { Component } from 'react';
import axios from 'axios';

// function Sum(){
//     return (
//         <>

//         <div className="card">
//             <div className="row">
//               <div className="col-9">
//                 <h1 className="card-text"><b>{posts[post].purchased_office_template.purchased_office_services[0].name}</b></h1>
//               </div>
//               <div className="col-3">
//                 <h1 className="card-text"><b>{posts[post].purchased_office_template.purchased_office_services[0].price}</b></h1>
//               </div>
//             </div>
//           </div>

//         </>
//     )

// }
class Sum extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts1: []
    }
  }
  componentDidMount() {
    axios.get("https://jsonkeeper.com/b/356L")
      .then(response => {

        this.setState({ posts1: response.data.data.purchased_services });

      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    const { posts1 } = this.state
    return (
      <>
        <div className="card">
          {
            Object.keys(posts1).map((post2, index) => (
              ((posts1[post2].purchased_office_template.purchased_office_services[0].service_selected) ?

                <div className="row">
                  <div className="col-sm-8">
                    <h3 className="card-text">{posts1[post2].purchased_office_template.purchased_office_services[0].name}</h3>
                  </div>
                  <div className="col-sm-4">
                    <h3 className="card-text"><b>{posts1[post2].purchased_office_template.purchased_office_services[0].price}</b></h3>
                  </div>
                </div> : null)

            ))
          }
          <hr />
          <div className="row">
            <div className="col-sm-9"><h2><b>Total Is :</b></h2></div>
         <div className="col-sm-3"><h2><b>6000</b></h2></div>
          
          </div>
        
      </div>
      </>
    )
  }
}
export default Sum;