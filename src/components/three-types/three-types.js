import React from "react";
import "./three-types.css"
import { Link } from "react-router-dom";
import LIV_ENVILIV_ADVANCED from "./images/LIV ENVILIV ADVANCED.jpg";
import GIANT_TRANCE_ADVANCED_PRO_29_2019 from "./images/GIANT TRANCE ADVANCED PRO 29 2019.jpg";
import PRIDE_ROCX_DIRT_TOUR_2020 from "./images/PRIDE ROCX DIRT TOUR 2020.jpg";



const ThreeTypes = () => {
    return (
        <section className="threeTypes container text-center pt-5 px-1 px-md-3">
            <h3 className="text-center mb-3 mb-md-5">
                Choose bikes type You want to see</h3>

            <div className="row mx-0">
                <div className="roadBikes p-3 p-md-4 col-4 mb-4">
                    <div className="my-btn mx-auto mb-4 d-flex align-items-center justify-content-center view">
                        <Link to="/roadbikes/">
                            <img src={LIV_ENVILIV_ADVANCED}
                                className="z-depth-3 rounded-circle img-fluid mx-auto p-1 p-md-3" alt="road bike" />
                            <span className="mask flex-center rgba-black-strong rounded-circle">Road</span>
                        </Link>
                    </div>
                </div>

                <div className="downhillBikes p-3 p-md-4 col-4 mb-4">
                    <div className="my-btn mx-auto mb-4 d-flex align-items-center justify-content-center view">
                        <Link to="/downhillbikes/">
                            <img src={GIANT_TRANCE_ADVANCED_PRO_29_2019}
                                className="z-depth-3 rounded-circle img-fluid mx-auto p-1 p-md-3" alt="downhill bike" />
                            <span className="mask flex-center rgba-black-strong rounded-circle">Downhill</span></Link>
                    </div>
                </div>

                <div className="gravelBikes p-3 p-md-4 col-4 mb-4">
                    <div className="my-btn mx-auto mb-4 d-flex align-items-center justify-content-center view">
                        <Link to="/gravelbikes/">
                            <img src={PRIDE_ROCX_DIRT_TOUR_2020}
                                className="z-depth-3 rounded-circle img-fluid mx-auto p-1 p-md-3" alt="gravel bike" />
                            <span className="mask flex-center rgba-black-strong rounded-circle">Gravel</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ThreeTypes;


