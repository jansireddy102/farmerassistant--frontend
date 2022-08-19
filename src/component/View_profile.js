import React from 'react';
import axios from 'axios';
import './style/view_profile.css';



export default class View_profile extends React.Component {
    state = {
      values: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:8081/User/getall`)
        .then(res => {
          const values = res.data;
         console.log(values);
           this.setState({values});
        }).catch((er)=>alert("some error"))
    }
    render() {
        
      return (
      <form>
      <div>
        <h1>View Profile</h1>
        <table className="center"  >
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Username</th>
                </tr>
              </thead>
              <tbody>
                {this.state.values.map((c) => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.username}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          {/* <div className='view_profile'>
               <ul className='view_ui'>
           {
            this.state.values
              .map((values,Index) =>
       
                <li  key={Index}>
                    Name : {values.username} || id:{values.id}  </li>
              )
          }  
        </ul>
          </div> */}

          </div>  
          </form>
      )
    }
  }