import React from "react";
import "./footer.css";
import UdgamLogo from "../assets/udgam.svg"; 
import ECellLogo from "../assets/ecell.svg"; 
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import LinkedIn from "../assets/linkedin.svg";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="flex justify-center items-center gap-8">
                <img src={UdgamLogo} alt="Udgam Logo" className="udgam-logo" /> 
                <img src={ECellLogo} alt="E-Cell Logo" className="ecell-logo" />
                </div>
                <h1 className="description">The largest entrepreneurship summit of Northeast India</h1>
            </div>
            <div className="footer-section">
                <h1>Contact Us</h1>
                <p>Suraj Kumar</p>
                <p>Design Head</p>
                <p>+91 829901712</p>
            </div>
            <div className="footer-section">
                <h1>Address</h1>
                <p>E-Cell, IIT Guwahati</p>
                <p>Assam - 781039</p>
            </div>
            <div className="footer-section">
                <h1>Email</h1>
                <p>edc@iitg.ac.in</p>
                <p>udgam@iitg.ac.in</p>
            </div>
            <div className="footer-section">
                <h1>Follow Us</h1>
                <div className="social-icons">
                    <a href="#" className="icon"> {/* Replace "#" with actual links */}
                      <img src={Instagram} alt="Instagram" className="glow-on-hover" />
                    </a>
                    <a href="#" className="icon">
                        <img src={Facebook} alt="Facebook" className="glow-on-hover" />
                    </a>
                    <a href="#" className="icon">
                      <img src={Twitter} alt="Twitter" className="glow-on-hover" />
                    </a>
                    <a href="#" className="icon">
                        <img src={LinkedIn} alt="LinkedIn" className="glow-on-hover" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Udgam 2024 IIT Guwahati. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
