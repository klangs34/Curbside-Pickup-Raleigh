import React from 'react';
import { NavLink } from 'react-router-dom';

const footer = () => (
  <>
    <div id="footer" className="container-fluid mt-5 pt-5 pb-2 bg-info">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mr-auto">
            <ul className="text-align-left px-0" style={{listStyle: 'none', color: 'white'}}>
              <p className="h4 pb-3">Links</p>
              <li className="pb-2"><NavLink to='/' activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                    textDecoration: "none"
                                  }}>Home</NavLink> </li>
              <li className="pb-2"><NavLink to='/restaraunt-profile'  className="text-white" activeStyle={{
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                  }}>Restaraunts</NavLink> </li>
              <li className="pb-2"><NavLink to='/create-account'  className="text-white" activeStyle={{
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                  }}>Create Account</NavLink> </li>
              <li className="pb-2"><NavLink to='/sign-in' className="text-white" activeStyle={{
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                  }}>Sign In</NavLink> </li>
            </ul>
          </div>
          <div className="col-sm-6 text-white">
            <h4 className="h4 mb-4">Follow Us</h4>
            <ul style={{listStyle: "none"}} className="d-flex flex-column px-0">
              <li className="pl-2 mr-2 mb-2" style={{ fontSize: '16px'}}><a className="text-white" href="https://github.com/wdvaughn/" title=" William Vaughn on Github"><img src="https://img.icons8.com/material-rounded/24/000000/github.png" />William Vaughn</a></li>  
              <li className="pl-2 mr-2 mb-2 " style={{ fontSize: '16px'}}><a className="text-white" href="https://github.com/bclark07" title="Brittany Clark on Github"><img src="https://img.icons8.com/material-rounded/24/000000/github.png" />Brittany Clark</a></li> 
              <li className="pl-2 mr-2 mb-2" style={{ fontSize: '16px'}}><a className="text-white" href="https://github.com/klangs34" title="Kelsie Langston on Github"><img src="https://img.icons8.com/material-rounded/24/000000/github.png" />Kelsie Langston </a></li> 
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-info border-top border-light">
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-column align-items-center">
            <p className="m-0 text-white">&copy; 2020, Made by Us</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  </>
);

export default footer;