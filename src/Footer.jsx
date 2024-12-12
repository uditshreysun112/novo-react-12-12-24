import React from "react";

export const Footer = () => {
    return (
        <>
           <footer id="footer" className="footer light-background">
  <div className="footer-top">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-about">
          <a href="index.html" className="logo d-flex align-items-center">
            <span className="sitename">Maritime Education</span>
          </a>
          <p>Embark on a journey of maritime excellence. Learn the skills, values, and knowledge to navigate the seas
            and lead the future of the maritime industry.</p>
          <div className="social-links d-flex mt-4">
            <a href><i className="bi bi-twitter-x" /></a>
            <a href><i className="bi bi-facebook" /></a>
            <a href><i className="bi bi-instagram" /></a>
            <a href><i className="bi bi-linkedin" /></a>
          </div>
        </div>
        <div className="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Maritime Training</a></li>
            <li><a href="#">Marine Eng. Programs</a></li>
            <li><a href="#">S.P.M</a></li>
            <li><a href="#">Global Maritime Logistics</a></li>
            <li><a href="#">Safety and Compliance</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <p className="mt-4"><strong>Phone:</strong> <span>+91 8888 5488 55</span></p>
          <p><strong>Email:</strong> <span>info@example.com</span></p>
        </div>
      </div>
    </div>
  </div>
  <div className="container copyright text-center">
    <p>©<strong className="px-1 sitename">Maritime Education</strong> <span>All Rights Reserved</span></p>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you've purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
      Designed by <a href="https://github.com/uditshreysun112" style={{color: '#344ac8'}}>Udit Narayan</a>
    </div>
  </div>
</footer>

        </>
    );
};