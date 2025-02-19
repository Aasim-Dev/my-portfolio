import React from "react";
import emailIcon from "../assets/emailIcon.png";
import linkedinIcon from "../assets/linkedinIcon.png";
import githubIcon from "../assets/githubIcon.png";

function Footer() {
    return (
        <footer className="contact__container" id="contact">
            <div className="contact_text">
            <h2>Aasim Sanandwala</h2>
            <p>All Rights Reserved</p>
            </div>
            <ul className="contact__links">
                <li className="contact__link">
                    <img src={emailIcon} alt="" />
                    <a href="mailto:sanandwalaaasim@outlook.com">sanandwalaaasim@outlook.com</a>
                </li>
                <li className="contact__link">
                    <img src={linkedinIcon} alt="" />
                    <a href="https://www.linkedin.com/myname">linkedin.com/in/aasim-sanandwala</a>
                </li>
                <li className="contact__link">
                    <img src={githubIcon} alt="" />
                    <a href="https://www.github.com/">github.com/Aasim</a>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;