import React from "react";
import "./Techstacks.css";
import { FaReact, FaAws } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiCsharp,
  SiPhp,
  SiMysql,
  SiMicrosoftazure,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Technologies we use</h2>
        <div className="techsection">
          <div>
            <SiCsharp />
            <h5>C#</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiPhp />
            <h5>Php</h5>
          </div>

          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <BsWordpress />
            <h5>Wordpress</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiMysql />
            <h5>MySql</h5>
          </div>
          <div>
            <SiMicrosoftazure />
            <h5>Azure</h5>
          </div>
          <div>
            <FaAws />
            <h5>AWS</h5>
          </div>
        </div>
      </div>
    </>
  );
};
