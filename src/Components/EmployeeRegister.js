import React, { useState, useEffect } from "react";
import "./register.css";
import axios from "axios";
function EmployeeRegister() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [empId, setEmpId] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const data = {
    name: name,
    password: password,
    email: email,
    empId: empId,
    address: address,
    phone: phone,
    dob: dob,
    position: designation,
    department: department
  };
  const handelAddEmployee = () => {
    axios
      .post("https://marketplaceb.herokuapp.com/api/addemployee", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div class="container">
        <center>
          {" "}
          <h1> Employee Registration Form</h1>{" "}
        </center>
        <hr />
        <label>
          <b> Name </b>
        </label>
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          size="15"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          <b>Emp Id</b>
        </label>
        <input
          type="text"
          name="Emploee Id"
          placeholder="emp id"
          size="10"
          required
          onChange={(e) => setEmpId(e.target.value)}
        />
        <div>
          <label>Department :</label>
          <select onChange={(e) => setDepartment(e.target.value)}>
            <option value="Department">Department</option>
            <option value="Tech">Tech</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div>
          <label>Position :</label>
          <br />
          <input type='radio' label="Intern" checked={designation === 'Intern'} value="Intern" onClick={() => setDesignation('Intern')} /> Intern
          <input type='radio' label="Developer" checked={designation === 'Developer'} value="Developer" onClick={() => setDesignation('Developer')} /> Developer
        </div>
        <label>Phone :</label>
        <input
          type="text"
          name="country code"
          placeholder="Country Code"
          value="+91"
          size="2"
        />
        <input
          type="text"
          name="phone"
          placeholder="phone no."
          size="10"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>DOB : </label>{" "}
        <input type="date" onChange={(e) => setDob(e.target.value)} />
        <br />
        <br />
        Current Address :
        <textarea
          cols="80"
          rows="5"
          placeholder="Current Address"
          required
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <br />
        <br />
        <input
          type="Password"
          id="pass"
          name="pass"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <br /> <br />
        <input type="button" value="Submit" className="btn btn btn-success" onClick={handelAddEmployee} />
      </div>
    </div>
  );
}

export default EmployeeRegister;
