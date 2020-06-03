import React, { Component } from 'react'
import "./App.css";
class Menu extends Component {
  render() {
    return (
      <header className="header">
        <a href="/" className="logo" alt="logo">
          محراب گشت
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#!">متن نمونه</a>
          </li>
          <li>
            <a href="#!">متن نمونه</a>
          </li>
          <li>
            <a href="#!">متن نمونه</a>
          </li>
          <li>
            <a href="#!">متن نمونه</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Menu;
