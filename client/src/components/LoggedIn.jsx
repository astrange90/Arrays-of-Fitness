import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import auth from '../utils/auth';

function LoggedIn() {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    const handleNavLinkClick = () => {
        scrollToBottom();
    };

    return (
        <div className="hero_area">
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <NavLink className="navbar-brand" to="/">
                            <span>Arrays of Fitness</span>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about" onClick={handleNavLinkClick}>About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/trainer" onClick={handleNavLinkClick}>Trainers</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact Us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/savedworkout" onClick={handleNavLinkClick}>SavedWorkouts</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link onClick={auth.logout} className="nav-link" to="/">Logout</Nav.Link>
                                    </li>
                                </ul>
                                <div className="user_option">
                                    <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                        <button className="btn my-2 my-sm-0 nav_search-btn" type="submit"></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>


            <section className=" slider_section position-relative">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="col-lg-10 col-md-11 mx-auto">
                                    <div className="detail-box">
                                        <div>
                                            <h3>Fitness</h3>
                                            <h2>Training</h2>
                                            <h1>Arrays Of Fitness</h1>
                                            <p>Welcome to Arrays of Fitness. We know getting in shape is not easy, whether you're looking to loose weight or want to tone your muslces.
                                                You've come to the right site! <br />
                                                We provide a space for individulas to log their workouts. We also provide services with personal trainers to help get you reach your health goals. </p>
                                            {/* <div className="">
                                                <a href="">Contact Us</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoggedIn;