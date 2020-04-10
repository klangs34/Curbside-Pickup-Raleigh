import React, { useState } from "react";
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  const handleSignin = e => {
    e.preventDefault();
    axios.post('/api/login', {email, password})
      .then(data => console.log(data));
  }
  return (
  <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
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
      <button onClick={handleSignin} type="submit" className="btn btn-primary">
        Sign In
      </button>
    </form>
  </div>
)};

export default SignIn;
