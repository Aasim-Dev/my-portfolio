import React from "react";
import hero from "../assets/hero.jpg";
function Hero() {
    return (
        <section className="hero__container">
            <div className="hero__content">
                <h1 className="hero__title">Hi I'm Aasim</h1>
                <p className="hero__description">
                    I'm front-end developer fresher and using React and Node. Reach out if you'd like to know more!
                </p>
                <a href="mailto:sanandwalaaasim@outlook.com" className="hero__contactBtn">
                    Contact Me
                </a>
            </div>
            <img src={hero} className="hero__img" alt="" />
            <div className="hero__topBlur"></div>
            <div className="hero__bottomBlur"></div>
        </section>
    );
}
export default Hero;