import React from "react";
import DataList from "../data-list/data-list";
import { withRouter } from "react-router-dom";



const PageContainer = ({ getData, history, bikeType }) => {
    return (
        <DataList
            getData={getData}
            onItemSelected={(itemId) => {
                history.push(`/${bikeType}/${itemId}`)
            }} />
    );
};


export default withRouter(PageContainer);