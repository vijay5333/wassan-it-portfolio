import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCsharp,
  SiMysql,
  SiMicrosoftazure,
  SiPhp,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_information">
                <h2>Clap</h2>
                <p>
                  Rockstar games is a video game company who develops lots of
                  games like GTA, Red Dead, and many more. we build clone of
                  their store website.
                </p>
                <div>
                  <SiCsharp />
                  <SiMysql />
                  <SiMicrosoftazure />
                </div>
                <div>
                  <a
                    href="https://clap.wassan.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_information">
                <h2>Jiwi Daah Hasa</h2>
                <p>
                  Rockstar games is a video game company who develops lots of
                  games like GTA, Red Dead, and many more. we build clone of
                  their store website.
                </p>
                <div>
                  <SiCsharp />
                  <SiMysql />
                  <SiMicrosoftazure />
                </div>
                <div>
                  <a
                    href="https://dashboard.jiwidaahhasa.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_information">
                <h2>Odisha Millet Mission(OMM)</h2>
                <p>
                  Location based weather app. User can also search for their
                  cities and pickup location from map to see weather data of
                  respective places.
                </p>
                <div>
                  <SiPhp />
                  <SiMysql />
                  <SiMicrosoftazure />
                </div>
                <div>
                  <a
                    href="https://milletsodisha.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_information">
                <h2>Integrated Farming</h2>
                <p>
                  PulsePlus is an E-commerce web application for online Buying
                  Medicines and Consult to Doctor and Book a near Testlab.
                </p>
                <div>
                  <SiPhp />
                  <SiMysql />
                  <SiMicrosoftazure />
                </div>
                <div>
                  <a
                    href="https://integratedfarming.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_information">
                <h2>Savya</h2>
                <p>
                  Location based weather app. User can also search for their
                  cities and pickup location from map to see weather data of
                  respective places.
                </p>
                <div>
                  <FaReact />
                  <SiMaterialui />
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://savya.wassan.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_information">
                <h2>Seed Portal</h2>
                <p>
                  Location based weather app. User can also search for their
                  cities and pickup location from map to see weather data of
                  respective places.
                </p>
                <div>
                  <SiCsharp />
                  <SiMysql />
                  <SiMicrosoftazure />
                </div>
                <div>
                  <a
                    href="https://seedportalapp.wassan.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
