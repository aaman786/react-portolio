import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => (
  <>
    <h2>Aman.</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#work">Word</a>
      <a href="#timeline">Experiance</a>
      <a href="#services">Services</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#contact">Contacts</a>
    </div>
    <a href="mailto:official.6programmer@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
