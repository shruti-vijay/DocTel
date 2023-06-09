import React, { Component } from "react";
import "../App.css";

function Home(props) {
  return (
    <div className="container">
      <i className="fa fa-user-md fa-5x"></i>
      <h2>Welcome to Acropolis DocTel Application</h2>
      <br />
      <img src="https://aimsr.ac.in/wp-content/uploads/2015/09/building-big-picture.jpg" width={700}/>
    </div>
  );
}

export default Home;
