import React from "react";
import "./main-title.css";
import picture1 from "./images/picture1.jpg";
import picture2 from "./images/picture2.jpg";
import picture3 from "./images/picture3.jpg";
import picture4 from "./images/picture4.jpg";
import picture5 from "./images/picture5.jpg";



const MainTitle = () => {
    return (
        <section className="mainTitle">
             <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel"> 
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-2" data-slide-to="1"></li>
                    <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    <li data-target="#carousel-example-2" data-slide-to="3"></li>
                    <li data-target="#carousel-example-2" data-slide-to="4"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                    <div className="carousel-caption position-absolute">
                        <h1 >Bicycles, why do I love it?</h1>
                        <p>Adventures and explorations, cardio and aerobic, friendly community,  benefits for environment, a lot of fun and taste of adrenalin – that is why.
                        Below You may see my top 3 bicycles in types, I like the most, welcome
                        </p>
                    </div>


                    <div className="carousel-item active">
                        <div className="view">
                            <img className="d-block w-100" src={picture1}
                                alt="First slide"></img>
                            <div className="mask rgba-black-strong"></div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="view">
                            <img className="d-block w-100" src={picture2}
                                alt="Second slide"></img>
                            <div className="mask rgba-black-strong"></div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="view">
                            <img className="d-block w-100" src={picture3}
                                alt="Third slide"></img>
                            <div className="mask rgba-black-strong"></div>
                        </div>
                    </div>

                     <div className="carousel-item">
                        <div className="view">
                            <img className="d-block w-100" src={picture4}
                                alt="Fourth slide"></img>
                            <div className="mask rgba-black-strong"></div>
                        </div>
                    </div>

                     <div className="carousel-item">
                        <div className="view">
                            <img className="d-block w-100" src={picture5}
                                alt="Fifth slide"></img>
                            <div className="mask rgba-black-strong"></div>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                
                <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    );
};


export default MainTitle;


