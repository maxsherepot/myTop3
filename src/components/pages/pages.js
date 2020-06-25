import React from "react";
import Service from "../../service/service";
import PageContainer from "./page-container";



const service = new Service();

const RoadPage = () => {
    return <PageContainer
        getData={service.getRoadBikes}
        bikeType={"roadbikes"}
    />;
};

const GravelPage = () => {
    return <PageContainer
        getData={service.getGravelBikes}
        bikeType={"gravelbikes"}
    />;
};

const DownhillPage = () => {
    return <PageContainer
        getData={service.getDownhillBikes}
        bikeType={"downhillbikes"}
    />;
};


export { RoadPage, GravelPage, DownhillPage };
