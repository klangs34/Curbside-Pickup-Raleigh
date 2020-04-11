import React, { useState } from "react";
import axios from 'axios';

const SignUp = ({setIsLoggedToTrue}) => {
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  const handleSignup = e => {
    e.preventDefault();
    axios.post('/api/signup', {email, password})
      .then(data => {
        localStorage.setItem('jwtToken', data.data.token);
        setIsLoggedToTrue();
      });
  }

  return (
  <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignup} type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  </div>
  )};

export default SignUp;
