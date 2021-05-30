import React, { Component } from 'react';
import axios from 'axios';
import Sum from './Sum.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    axios.get("https://jsonkeeper.com/b/356L")
      .then(response => {
       
        this.setState({ posts: response.data.data.purchased_services });

      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    const { posts } = this.state
    return (
      <>
        <div className="container my-4">
          <div className="card" >
            <h1><b>PURCHASED SERVICES</b></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text .</p>

            {
              Object.keys(posts).map((post, index) => (
                ((posts[post].purchased_office_template.purchased_office_services[0].service_selected) ?

                  <div className="container" key={index}>
                    <h1>{posts[post].name}</h1>
                    <div className="card" >

                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <img src={posts[post].purchased_office_template.purchased_office_services[0].image} alt="demo" />
                          </div>
                          <div className="col-sm-9">
                            <div className="row">
                              <div className="col-sm-7">
                                <h1 className="card-text"><b>{posts[post].purchased_office_template.purchased_office_services[0].name}</b></h1>
                              </div>
                              <div className="col-sm-5">
                                <h1 className="card-text">Price :<b>{posts[post].purchased_office_template.purchased_office_services[0].price}</b></h1>
                              </div>
                            </div>
                            <p className="card-text my-5">{posts[post].purchased_office_template.purchased_office_services[0].description}</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>



                  : null)

              ))
            }
          </div>
          <Sum/>
        </div>
      </>
    )
  }
}
export default App;