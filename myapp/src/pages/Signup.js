import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onchange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(data));
    console.log(JSON.stringify(data));
    axios({
      method: "post",
      url: "http://127.0.0.1:5000/insertData",
      data: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        alert(response.data.message);
        navigate("/Login");
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("Signup failed. Please try again.");
      });
  };

  return (
    <>
      <h2>This is Sign Up Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              aria-describedby="firstname"
              onChange={onchange}
            />
            {/* <div id="firstname" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              aria-describedby="lasttname"
              onChange={onchange}
            />
            {/* <div id="firstname" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={onchange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={onchange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
