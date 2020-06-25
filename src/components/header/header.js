import React, { Component } from 'react';
import "./header.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";



class Header extends Component {

    render() {

        return (
            <section className="header elegant-color">
                <nav className="navbar z-depth-0 navbar-expand-sm text-light justify-content-between">

                    <Link to="/" >
                        <img className="ml-md-3" src={logo} alt="logo"></img>
                    </Link>

                    <div className="d-flex justify-content-between align-items-center mr-md-3">
                        <div className="find-me mr-2 mr-md-4">Find me in:</div>

                        <div className="my-btn mr-2 mr-md-3"><a href="https://github.com/maxsherepot?tab=repositories" className="my-btn"><i className="fab fa-github"></i></a></div>

                        <div className="my-btn mr-2 mr-md-3"><a href="https://www.facebook.com/maxsherepot?lst=100025338211292%3A100025338211292%3A1522854916&sk=about&section=contact-info" className="my-btn"><i className="fab fa-facebook"></i></a></div>

                        <div className="my-btn mr-2 mr-md-3"><a href="https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D1%88%D0%B5%D1%80%D0%B5%D0%BF%D0%BE%D1%82-457a4b196/" className="my-btn"><i className="fab fa-linkedin-in"></i></a></div>
                    </div>
                </nav>
            </section>
        );
    };
};


export default Header;
