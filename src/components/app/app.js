import React, { Component, } from "react";
import Header from "../header/header";
import MainTitle from "../main-title/main-title";
import ThreeTypes from "../three-types/three-types";
import BikeInfo from "../bike-info/bike-info";
import { Switch, Route } from "react-router-dom";
import { RoadPage, GravelPage, DownhillPage } from "../pages/pages";
import { withRouter } from "react-router-dom";



class App extends Component {

    renderBikeInfo = () => {
        return (
            ({ match }) => {
                const { id } = match.params;
                return <BikeInfo itemId={parseInt(id)} />
            }
        );
    };


    render() {

        return (
            <div>
                <Header />
                <Route path="/" exact render={() =>
                    <React.Fragment>
                        <MainTitle />
                        <ThreeTypes />
                    </React.Fragment>} />

                <main className="container">
                    <Switch>

                        <Route path="/roadbikes/" exact
                            render={() => <RoadPage />} />
                        <Route path="/roadbikes/:id"
                            render={this.renderBikeInfo()} />


                        <Route path="/gravelbikes/" exact
                            render={() => <GravelPage />} />
                        <Route path="/gravelbikes/:id"
                            render={this.renderBikeInfo()} />


                        <Route path="/downhillbikes/" exact
                            render={() => <DownhillPage />} />
                        <Route path="/downhillbikes/:id"
                            render={this.renderBikeInfo()} />

                    </Switch>
                </main>
            </div>
        );
    };
};


export default withRouter(App);

