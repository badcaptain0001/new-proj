import React, { useState, useEffect } from "react";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './admin.css'
const EmployeeLogin = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [usermodalIsOpen, setUserIsOpen] = useState(false);
  const [empId, setEmpId] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [leaveType, setLeaveType] = useState("fullday");
  const [leaveOption, setLeaveOption] = useState("sickLeave");
  const [localData, setLocalData] = useState();
  const [saveNews, setSaveNews] = useState();
  const [showReward, setShowReward] = useState();
  useEffect(() => {
    setStartDate(convert(date[0].startDate));
    setEndDate(convert(date[0].endDate));
  }, [date]);
  useEffect(() => {
    // get localstorage data
    let localData = localStorage.getItem("empDetails");
    if (localData) {
      setLocalData(JSON.parse(localData));
      console.log(JSON.parse(localData));
    } else {
      setLocalData(null);
    }
  }, []);
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=0b891d97f1f948d687e340f83eee1f90').then(res => {
      console.log(res.data.articles);
      setSaveNews(res.data.articles);
    }).catch(err => { })
  }, []);
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
  }
  const leaveData = {
    empId: empId,
    startDate: startDate,
    endDate: endDate,
    leaveType: leaveType,
    leaveOption: leaveOption,
  };
  const handleApplyLeave = () => {
    axios
      .post("https://marketplaceb.herokuapp.com/api/applyleave", leaveData)
      .then((res) => {
        console.log(res.data);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "auto",
      width: "800px",
    },
  };
  function openModal() {
    setIsOpen(true);
  }
  function openModal2() {
    setIsOpen1(true);
    getReward();
  }
  function openModal1() {
    setUserIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function closeModal2() {
    setIsOpen1(false);
  }
  function afterOpenModal1() {
    setUserIsOpen(false);
  }
  const getReward = () => {
    axios
      .get("https://marketplaceb.herokuapp.com/api/showrewards")
      .then((res) => {
        console.log(res.data);
        setShowReward(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary" style={{ height: "50px" }}>
        <div className="container">
          <span className="text-default fw-bold " style={{ fontSize: "25px" }}>
            <i className="fa fa-users text-dark " /> Employee Dashboard
          </span>
          <div onClick={openModal1} className="btn btn-warning">
            <i className="fa fa-user" /> update profile
          </div>
          <div className="btn btn-warning" onClick={openModal}>
            <i className="fa fa-calendar" /> apply for leave
          </div>
          <div className="btn btn-warning" onClick={openModal2}>
            <i className="fa fa-trophy" /> Rewards
          </div>
          <Link to={"/call-hr"} className="btn btn-warning">
            <i className="fa fa-phone-square" /> call to HR
          </Link>
          <Link to={"/employee-home"} className="btn btn-danger">
            <i className="fa fa-lock" /> logout
          </Link>
        </div>
      </nav>
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
      </div>
      <div style={{ height: '500px', overflow: 'auto' }}>
        <h1>Latest News</h1>
        {saveNews && saveNews.map((news, index) => {
          return (
            <div className="card mainNewsContainer" key={index}>
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.description}</p>
                <p className="card-text">{news.author}</p>
              </div>
            </div>
          );
        })}
      </div>
      {localData && (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h3>Apply Leave</h3>
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="text"
                    placeholder="EmpId"
                    value={localData.empId}
                    onChange={(e) => setEmpId(e.target.value)}
                  ></input>
                  <select onChange={(e) => setLeaveType(e.target.value)}>
                    <option value="fullDay">Full Day</option>
                    <option value="halfDay">Half Day</option>
                  </select>
                  <select onChange={(e) => setLeaveOption(e.target.value)}>
                    <option value="sickLeave">Sick Leave</option>
                    <option value="casualLeave">Casual Leave</option>
                    <option value="EarnedLeave">Earned Leave</option>
                  </select>
                </div>
                <DateRangePicker
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="customDateSelect"
                />
              </div>
            </div>
          </div>
          <button className="btn btn-success" onClick={handleApplyLeave}>
            Apply
          </button>
        </Modal>
      )}
      {localData && (
        <Modal
          isOpen={usermodalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={afterOpenModal1}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h3>User Details</h3>
          <div>
            <div>Name:{localData.name}</div>
            <div>Address:{localData.address}</div>
            <div>Phone:{localData.phone}</div>
            <div>Email:{localData.email}</div>
            <div>Designation:{localData.position}</div>
          </div>
        </Modal>
      )}
      <Modal
        isOpen={modalIsOpen1}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ height: '300px', overflow: 'auto' }}>
          {showReward && showReward.map((reward, index) => {
            return (
              <div className="card rewardsContainer" key={index}>
                <div className={!reward.rewardText?'card-body':'card-body green'}>
                  <h5 className="card-title">{reward.name} {reward.empId}</h5>
                  <div style={{display:'flex', gap:'30px',fontWeight:'700'}}>
                    <p className="card-text">{reward.rewards}</p>
                    <p className="card-text">{!reward.rewardText ? 'no reward' : reward.rewardText}</p>
                  </div>
                </div>
              </div>
            );
          }
          )}
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default EmployeeLogin;
