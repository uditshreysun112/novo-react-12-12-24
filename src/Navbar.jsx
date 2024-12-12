import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.png" alt=""> */}
                        <h1 className="sitename" style={{ fontFamily: 'Arial, sans-serif' }}>Maritime Education</h1>
                    </a>
                    <nav id="navmenu" className="navmenu" style={{ background: '#000833a9', paddingRight: 20 }}>
                        <ul>
                            <li><Link to="/" className="active">Home<br /></Link></li>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="services">Services</Link></li>
                            <li><Link to="portfolio">Portfolio</Link></li>
                            <li><Link to="team">Team</Link></li>
                            <li><Link to="blog">Blog</Link></li>
                            <li className="dropdown"><Link to="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></Link>
                                <ul>
                                    <li><a href="#">Dropdown 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                    <li><a href="#">Dropdown 3</a></li>
                                    <li><a href="#">Dropdown 4</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                    </nav>
                </div>
            </header>

        </>
    );
};