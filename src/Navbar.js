import React, { useState } from "react";

export default function Navbar() {
  const [navStatus, setNavStatus] = useState(0);
  const [navWidth, setNavWidth] = useState("");

  function toggleNav() {
    if (navStatus == 0) {
      setNavStatus(1);
      setNavWidth("100%");
    } else {
      setNavStatus(0);
      setNavWidth("0px");
    }
  }

  return (
    <div className="navbar" style={{ width: navWidth }}>
      <button onClick={toggleNav}>
        <i className="fas fa-bars"></i>
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

//

//
