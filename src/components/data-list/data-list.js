import React, { Component } from "react";
import DataListItem from "../data-list-item/data-list-item";
import { connect } from "react-redux";
import { bikesRequested, bikesLoaded, bikesError } from "../../actions/actions";
import { withRouter } from "react-router-dom";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";



class DataList extends Component {
    componentDidMount() {
        const { bikesRequested, bikesLoaded, bikesError, getData } = this.props;
        bikesRequested();

        getData()
            .then((bikeList) => bikesLoaded(bikeList))
            .catch((error) => bikesError(error))
    };


    render() {
        const { bikes, loading, error, onItemSelected } = this.props;

        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }


        return (
            <div>
                {bikes.map((bike) => {
                    return (
                        <section key={bike.id}>
                            <DataListItem
                                bike={bike}
                                onItemSelected={() => onItemSelected(bike.id)}
                            />
                        </section>
                    );
                })};
            </div>
        );
    };
};


const mapStateToProps = ({ bikes, loading, error }) => {
    return { bikes, loading, error }
};

const mapDispatchToProps = {
    bikesRequested,
    bikesLoaded,
    bikesError
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DataList));