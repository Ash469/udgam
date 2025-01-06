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
        <footer className="footer bg-gray-900 text-white p-8">
            {/* Top Section: Logos and Description */}
            <div className="footer-section flex flex-col items-center mb-6">
                <div className="flex justify-center items-center gap-12">
                    <img src={UdgamLogo} alt="Udgam Logo" className="udgam-logo w-44" /> 
                    <img src={ECellLogo} alt="E-Cell Logo" className="ecell-logo w-24" />
                </div>
                <div className="description mt-6 text-lg text-center max-w-md">
                    The largest entrepreneurship summit of Northeast India
                </div>
            </div>

            {/* Bottom Sections: Contact, Address, Email, Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Contact Us */}
                <div className="footer-section">
                    <h1 className="text-xl font-semibold mb-2">Contact Us</h1>
                    <p>Suraj Kumar</p>
                    <p>Design Head</p>
                    <p>+91 829901712</p>
                </div>
                {/* Address */}
                <div className="footer-section">
                    <h1 className="text-xl font-semibold mb-2">Address</h1>
                    <p>E-Cell, IIT Guwahati</p>
                    <p>Assam - 781039</p>
                </div>
                {/* Email */}
                <div className="footer-section">
                    <h1 className="text-xl font-semibold mb-2">Email</h1>
                    <p>edc@iitg.ac.in</p>
                    <p>udgam@iitg.ac.in</p>
                </div>
                {/* Follow Us */}
                <div className="footer-section">
                    <h1 className="text-xl font-semibold mb-2">Follow Us</h1>
                    <div className="social-icons flex gap-4">
                        <a href="#" className="icon">
                            <img src={Instagram} alt="Instagram" className="w-8 h-8 glow-on-hover" />
                        </a>
                        <a href="#" className="icon">
                            <img src={Facebook} alt="Facebook" className="w-8 h-8 glow-on-hover" />
                        </a>
                        <a href="#" className="icon">
                            <img src={Twitter} alt="Twitter" className="w-8 h-8 glow-on-hover" />
                        </a>
                        <a href="#" className="icon">
                            <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8 glow-on-hover" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom text-center mt-8 text-sm"
                style={{
                    color: "var(--Udgam-White, #F4F5F6)",
                    fontFamily: "PP Mori",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal"
                }}
            >
                <p>Udgam 2025 IIT Guwahati. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
