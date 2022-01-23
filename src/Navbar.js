import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <button>
        <i class="fas fa-bars"></i>
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
