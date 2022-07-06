# react
import React from "react";
import { MenuItems } from "./MenuItems";
import { Nav } from "react-bootstrap";
import { MenuItems } from "./MenuItems"

export default function Navbar() {
  return (
    <Nav className="NavbarItems">
      <h1 className="Navbar-logo">React</h1>
      <div className="menu-icon"></div>
      <ul>
        <li><a href="#"></a></li>
      </ul>
    </Nav>
  );
}