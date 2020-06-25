import React from "react";
import "./data-list-item.css"



const DataListItem = ({ bike, onItemSelected }) => {
    const { title, image } = bike;
    

    return (
        <div className="text-center text-lg-left px-1 px-md-3">
            <div className="row">
                <div className="col-6">
                    <img src={image} className="img-fluid" alt="Bike" />
                </div>

                <div className="col-6 bikeTitleColumn ">
                    <h4 className="mt-2 mt-md-5 bikeTitle">{title}</h4>
                    <div onClick={onItemSelected}
                        className="btn my-btn">
                        <span> Show me!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default DataListItem;