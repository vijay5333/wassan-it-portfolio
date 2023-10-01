import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              {/* Your logo or site name */}
              <h2>Wassan-IT</h2>
            </div>
            <div className="footer-links">
              {/* Add your footer links here */}
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            {/* Copyright or additional information */}
            <p>
              &copy; {new Date().getFullYear()}
              <a target="_blank" href="https://wassan.org">
                Wassan
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
