import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import "../Header/Header.css";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            WASSAN-IT
          </a>
        </h3>
        <Navbar />
      </header>
      <div className="text-center">
        <a
          style={{ textAlign: "center" }}
          href="https://wassan.org"
          target="_blank"
        >
          @{new Date().getFullYear()} | Watershed Support Services and
          Activities Network (WASSAN)
        </a>
      </div>
    </>
  );
};
