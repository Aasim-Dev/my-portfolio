import React from "react";
import aboutIcon from "../assets/aboutIcon.jpg";
import cursorIcon from "../assets/cursorIcon.png";
import serverIcon from "../assets/serverIcon.png";

function About() {
    return <section className="about__container" id="about">
        <h2 className="about__title">About</h2>
        <div className="about__content">
        <img src={aboutIcon} className="about__img" alt="" />
            <ul className="about__items"> I
                <li className="about__item">
                    <img src={cursorIcon} alt="" />
                    <div>
                    <h3>Frontend Developer</h3>
                    <p>I'm frontend developer with experience in building responsive and optimized websites</p>
                    </div>
                </li>
                <li className="about__item">
                    <img src={serverIcon} alt="" />
                    <div>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimized backend systems and APIs</p>
                    </div>
                </li>
                <li className="about__item">
                    <img src={cursorIcon} alt="" />
                    <div>
                    <h3>UI designer</h3>
                    <p>I have experience in designing landing pages</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}

export default About;