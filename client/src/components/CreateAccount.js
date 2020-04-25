import React, { useState } from "react";
import axios from "axios";

const CreateAccount = ({ setIsLoggedToTrue, ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayError, setDisplayError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post("/api/createaccount", { email, password })
      .then((data) => {
        localStorage.setItem("jwtToken", data.data.token);
        localStorage.setItem("id", data.data._id);
        setIsLoggedToTrue();
        props.history.push("/restaurant-profile");
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        setDisplayError(err.response.data.error.message);
      });
  };

  return (
    <main className="container">
      <form className="mt-5">
        {displayError && (
          <div className="alert alert-danger" role="alert">
            {displayError}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleSignup}
          type="submit"
          className="btn btn-primary"
        >
          Create account
        </button>
      </form>
    </main>
  );
};

export default CreateAccount;
