import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fab fa-github"
          style={{ transform: "rotate(270deg)" }}
        ></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fab fa-linkedin-in"
          style={{ transform: "rotate(270deg)" }}
        ></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fab fa-google"
          style={{ transform: "rotate(270deg)" }}
        ></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.twitter}
        className="icon-button twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fab fa-twitter"
          style={{ transform: "rotate(270deg)" }}
        ></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fab fa-instagram"
          style={{ transform: "rotate(270deg)" }}
        ></i>
        <span></span>
      </a>
    </div>
  );
}
