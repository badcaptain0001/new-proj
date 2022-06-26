import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import "./admin.css";
import Navbar from "./Navbar";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const EmployeeLogin = (addEmp) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [empId, setEmpId] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [employeeAllDetails, setEmployeeAllDetails] = useState("");
  const [showEmpInfo, setShowEmpInfo] = useState(false);
  const [rewardType, setRewardType] = useState("");
  const [rewardText, setRewardText] = useState("");
  const [sendAward, setSendAward] = useState(false);
  const [saveEmpId, setSaveEmpId] = useState("");
  let subtitle;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "auto",
      width: "800px"
    }
  };
  function openModal() {
    setIsOpen(true);
  }
  function openModal1() {
    setIsOpen1(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  function closeModal1() {
    setIsOpen1(false);
  }
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
  const HandelsendAward = (id) => {
    openModal1();
    setSaveEmpId(id);
  }
  const submitSendAward = () => {
    const rewardData = {
      empId: saveEmpId,
      rewards: rewardType,
      rewardText: rewardText
    }
      axios.post("https://marketplaceb.herokuapp.com/api/giverewards", rewardData).then(res => {
        console.log(res);
        setIsOpen1(false);
      }).catch(err => {
        console.log(err);
      })
  }
  const handelAddEmployee = () => {
    axios
      .post("https://marketplaceb.herokuapp.com/api/addemployee", data)
      .then((res) => {
        closeModal();
        showAllEmployee();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    showAllEmployee();
  }, []);
  const showAllEmployee = () => {
    axios
      .get("https://marketplaceb.herokuapp.com/api/getallemployees")
      .then((res) => {
        console.log(res.data.data);
        setEmployeeAllDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <Navbar addEmp={openModal} />
      <div>
        <Carousel autoPlay>
          <div className="sliderImg">
            <img alt="" src="https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU" />
            <p className="legend">Employee leave management system combine number of processes and systems to automate and easily manage employee data, leave request, track and grant leave. In many institution staff are entitled to different types of leave, these leave are granted according to institution policy. Administrative department is mostly responsible for managing and granting leave request. To this end, most institution used conventional method of requesting, granting and managing leave. </p>
          </div>
          <div className="sliderImg">
            <img alt="" src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" />
            <p className="legend">In conventional method, leave is manually request by writing letter to head of department. The head of department minutes and forward the request to higher staff for approval. This method is time consuming, prone to error, require more paper work and difficult to manage.Hence the need for an automated leave management system that is faster, error free, less paper work and easy to manage.</p>
          </div>
          <div className="sliderImg">
            <img alt="" src="https://i.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE" />
            <p className="legend">leave management system is a system that employers use to allow employees to request leave and managers to approve requests made by employees. In the past, this was done manually by using sheets of paper to keep track of how much leave time employees had available. With an automated leave management system, you don’t have to worry about losing paperwork or missing employees’ requests for time off.
              Using an automated time and leave management system, and utilizing an adaptable HRIS platform, is an important part of modernizing your business practices. A good leave management system is cloud-based, automated, and digitalized, so requesting and approving time off is easy and you don’t have to worry about any paper records getting lost.</p>
          </div>
          <div className="sliderImg">
            <img alt="" src="https://i.picsum.photos/id/180/2400/1600.jpg?hmac=Ig-CXcpNdmh51k3kXpNqNqcDYTwXCIaonYiBOnLXBb8" />
            <p className="legend">Employee leave management system combine number of processes and systems to automate and easily manage employee data, leave request, track and grant leave. In many institution staff are entitled to different types of leave, these leave are granted according to institution policy. Administrative department is mostly responsible for managing and granting leave request. To this end, most institution used conventional method of requesting, granting and managing leave. In conventional method, leave is manually request by writing letter to head of department. The head of department minutes and forward the request to higher staff for approval. This method is time consuming, prone to error, require more paper work and difficult to manage. Hence the need for an automated leave management system that is faster, error free, less paper work and easy to manage.</p>
          </div>
        </Carousel>
        <div style={{ margin: "20px" }}>
          <div
            onClick={openModal}
            className="btn btn-outline-dark"
            style={{ marginRight: "15px" }}
          >
            <i className="fa fa-users" /> add employees
          </div>
          <div
            onClick={() => setShowEmpInfo(!showEmpInfo)}
            className="btn btn-outline-dark"
            style={{ marginRight: "15px" }}

          >
            <i className="fa fa-user-circle" /> employee information
          </div>
          <Link
            to={"/maintenance"}
            className="btn btn-outline-dark"
            style={{ marginRight: "15px" }}
          >
            <i className="fa fa-map-pin" /> maintenance
          </Link>
        </div>
        {showEmpInfo &&
          <table class="GeneratedTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>EmpId</th>
                <th>Dept.</th>
                <th>Position</th>
                <th>Phone</th>
                <th>Address</th>
                <th>D.O.B</th>
                <th>Reward</th>
              </tr>
            </thead>
            <tbody>
              {employeeAllDetails &&
                employeeAllDetails.map((employee, index) => {
                  return (
                    <tr key={index}>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.empId}</td>
                      <td>{employee.department}</td>
                      <td>{employee.position}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.address}</td>
                      <td>{employee.dob}</td>
                      <td><button onClick={() => HandelsendAward(employee.empId)}>Reward</button></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        }
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3 style={{ textAlign: "center", fontWeight: 700 }}>Add Employee</h3>
        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="number"
              placeholder="EmpId"
              onChange={(e) => setEmpId(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Department"
              onChange={(e) => setDepartment(e.target.value)}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <input
              type="text"
              placeholder="Position"
              onChange={(e) => setDesignation(e.target.value)}
            ></input>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="number"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
            <input
              type="date"
              placeholder="DOB"
              onChange={(e) => setDob(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="btn btn-success" onClick={handelAddEmployee}>
              Submit
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3 style={{ textAlign: "center", fontWeight: 700 }}>Reward</h3>
        <div style={{ marginTop: "20px" }}>
          <div style={{ textAlign: "center" }}>
            <select onChange={(e) => setRewardType(e.target.value)}>
              <option value="BestEmployee">Best Employee</option>
              <option value="BestAppriciation">Best Appriciation</option>
              <option value="BestPerformance">Best Performance</option>
            </select>
            <input type="text" placeholder="Reward Message" onChange={(e) => setRewardText(e.target.value)} />
            <button className="btn btn-success" onClick={submitSendAward}>
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default EmployeeLogin;
