
const bikesRequested = () => {
    return {
        type: "FETCH_BIKES_REQUESTED"
    };
};

const bikesLoaded = (newBikes) => {
    return {
        type: "FETCH_BIKES_LOADED",
        payload: newBikes
    };
};

const bikesError = (error) => {
    return {
        type: "FETCH_BIKES_ERROR",
        payload: error
    };
};

const showBikeInfo = (id) => {
    return {
        type: "SHOW_BIKE_INFO",
        payload: id
    };
};

export {
    bikesRequested,
    bikesLoaded,
    bikesError,
    showBikeInfo
};
