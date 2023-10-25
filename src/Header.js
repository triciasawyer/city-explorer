import React, { Component } from "react";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Data locations</h1>
        <img src="location-logo.png" alt="location logo"></img>
      </header>
    );
  }
}