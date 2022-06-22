import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
  height: '400px',
  width: '80%',
  margin: '50px auto',
  borderRadius: '10px',
};

const center = {
  lat: 28.4965662,
  lng: 77.0963935
};
function CallHr() {
  return (
    <div>
      <Navbar />
      <Header />
      <LoadScript
        googleMapsApiKey="AIzaSyCa1DfPATl3xccYzQug-XQt3wJKxu33_HQ" >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={20}
        >
        </GoogleMap>
      </LoadScript>
      <div className="CompanyAddress">
        <h1>Company Address</h1>
        <p>
          <b>Address: Tower C, SEZ Building, Building No 6, 5th & 6th Floor DLF C yber City Rd W Block</b>
          <br />
          <b>City: Gurugram</b>
          <br />
          <b>State:Haryana</b>
          <br />
          <b>Zip Code:122010</b>
          <br />
          <b>Phone Number:9090909090</b>
          <br />
        </p>
      </div>
    </div>
  );
}

export default CallHr;
