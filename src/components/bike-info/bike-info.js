import React, { Component } from "react";
import { connect } from "react-redux";
import { showBikeInfo } from "../../actions/actions";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import "./bike-info.css";



const SelectWindow = () => {
    return (
        <div>
            <h2 className="text-center h2-responsive">Please select any bike</h2>
        </div>
    );
};


class BikeInfo extends Component {
    componentDidMount() {
        const { showInfo, itemId } = this.props;
        if (!itemId) {
            return;
        }
        showInfo(itemId);
    };

    componentDidUpdate(prevProps) {
        const { showInfo, itemId } = this.props;
        if (itemId !== prevProps.itemId) {
            showInfo(itemId);
        };
    };



    render() {

        const { item, loading, error } = this.props;

        if (!item) {
            return <SelectWindow />
        }
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }


        return (

            <section className="bikeInfo pt-1 pt-md-5 px-1 px-md-3">
                <div className="row">
                    <div className="col-md-6">
                        <img className="zoom img-fluid" src={item.image} alt="Bike" />
                    </div>

                    <div className="col-md-6 d-flex">
                        <div className="pl-md-5">
                            <h4 className="font-weight-normal text-center mb-3 mb-md-4">{item.title}</h4>
                            <div className="mb-0">{item.description}</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};


const mapStateToProps = ({ idItem, loading, error }) => {
    return {
        item: idItem, loading, error
    };
};

const mapDispatchToProps = {
    showInfo: (itemId) => showBikeInfo(itemId),
};


export default connect(mapStateToProps, mapDispatchToProps)(BikeInfo);



