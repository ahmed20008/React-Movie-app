import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Movix is a movie website that offers a wide range of latest and popular movies to its users. With a user-friendly interface and a simple navigation system, Movix makes it easy for users to search and watch their favorite movies. The site provides an extensive collection of movies, including Hollywood blockbusters, indie films, and international movies, across different genres such as drama, action, comedy, and more. Additionally, Movix offers high-quality video and audio streaming, ensuring that users can enjoy their movies with crystal-clear picture and sound. The site is updated regularly with the latest movie releases, and users can also rate and review movies, allowing them to share their opinions with others. Whether you're a movie buff or simply looking for a convenient platform to watch movies, Movix is the perfect solution for all your movie needs.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

