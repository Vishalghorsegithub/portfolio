import React, { useState } from "react";
import "./Hero.css";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="hero-section"
      id="home"
      style={{ backgroundColor: "#f8f9fa", color: "#212529" }}
    >
      <div className="container">
        {/* Navbar */}
        <nav className="custom-navbar">
          {/* Logo */}
          <a className="navbar-brand" href="#home">
            Vishal Ghorse
          </a>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          {/* Navbar Links */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="row align-items-center hero-content">
          {/* Left Side - Text */}
          <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
            <h4 className="mb-2">Hello, I'm</h4>
            <h1 className="mb-3 fw-bold">Vishal Ghorse</h1>
            <h2 className="mb-3 fs-5 fw-normal">
              Full Stack Developer | UI/UX Enthusiast | Creative Coder
            </h2>
            <p className="mb-4">
              I create beautiful, functional websites and applications with
              modern technologies. Passionate about clean code and user
              experience.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-2">
              <a href="#portfolio" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-primary">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://placehold.co/400x400/e2e8f0/667eea?text=JD"
              alt="John Doe"
              className="img-fluid rounded shadow hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
