import React from "react";
import emailIcon from "../assets/emailIcon.png";
import linkedinIcon from "../assets/linkedinIcon.png";
import githubIcon from "../assets/githubIcon.png";

function Footer() {
    return (
        <footer className="footer__container" id="footer">
            <div className="footer_text">
            <h2>Aasim Sanandwala</h2>
            <p>All Rights Reserved</p>
            </div>
            <ul className="footer__links">
                <li className="footer__link">
                    <img src={emailIcon} alt="" />
                    <a href="mailto:sanandwalaaasim@outlook.com">Outlook/Aasim</a>
                </li>
                <li className="footer__link">
                    <img src={linkedinIcon} alt="" />
                    <a href="https://www.linkedin.com/in/aasim-sanandwala-b09a29221">linkedin/Aasim</a>
                </li>
                <li className="footer__link">
                    <img src={githubIcon} alt="" />
                    <a href="https://github.com/Aasim-Dev">github.com/Aasim</a>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;