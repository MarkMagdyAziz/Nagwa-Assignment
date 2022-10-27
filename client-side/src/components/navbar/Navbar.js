import React, { Component } from 'react';
import logo from './../../clipart1483369.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/">
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
          />
        </Link>
      </div>
    </nav>
  );
}
