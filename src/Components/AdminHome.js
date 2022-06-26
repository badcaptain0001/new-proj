import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Home = () => {
  const [userId, setUserId] = React.useState("");
  const [userPass, setUserPass] = React.useState("");

  const handelLogin = () => {
    const loginData = {
      adminId: userId,
      password: userPass
    }
    axios.post("https://marketplaceb.herokuapp.com/api/loginadmin", loginData)
      .then(res => {
        if (res.data.data != null) {
          if (res.data.data === null) {
            toast.error("Invalid Credentials");
          }
          else {
            window.location.href = "admin-login";
          }
        }
      }
      ).catch(err => {
        console.log(err);
        toast.error("Invalid Credentials");
      }
      )
  }
  return (
    <div>
      <Toaster />
      <nav className="navbar navbar-dark bg-dark" style={{ height: "55px" }}>
        <div className="container">
          <span
            className="myStyle"
            style={{ fontSize: "25px", color: "whitesmoke" }}
          >
            <i className="fa fa-users " /> Leave Management System{" "}
          </span>
          <Link
            to={"/employee-home"}
            className="btn btn-secondary"
            style={{ opacity: "0.87", fontWeight: 700 }}
          >
            {" "}
            Employee login
          </Link>
        </div>
      </nav>

      <div className="container">
        <iframe
          className="gif"
          src="https://embed.lottiefiles.com/animation/9573"
          title="a2"
        ></iframe>
      </div>

      <div className="container2">
        <h1 className="login-text-header">Admin Login</h1>
        <br></br>
        <form>
          <div className="mb-4">
            <h5 style={{ display: "inline-block" }}>Admin Id:</h5>
            <input
              type="text"
              className="form-control"
              style={{ width: "80%", margin: "auto" }}
              placeholder="enter your admin Id"
              required
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <br></br>
          <div className="mb-4">
            <h5 style={{ display: "inline-block" }}>Password : </h5>
            <input
              type="password"
              className="form-control "
              style={{ width: "80%", margin: "auto" }}
              placeholder="enter your password"
              required
              onChange={(e) => setUserPass(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <br></br>
            <div className="btn btn-success" onClick={handelLogin}>
              <i className=" fa fa-sign-in" /> Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
