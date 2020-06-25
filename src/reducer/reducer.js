
const initialState = {
    bikes: [],
    loading: false,
    error: null,
    idItem: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "FETCH_BIKES_REQUESTED":
            return {
                ...state,
                bikes: [],
                loading: true,
                error: null
            };

        case "FETCH_BIKES_LOADED":
            return {
                ...state,
                bikes: action.payload,
                loading: false,
                error: null
            };

        case "FETCH_BIKES_ERROR":
            return {
                ...state,
                bikes: action.payload,
                loading: false,
                error: action.payload
            };

        case "SHOW_BIKE_INFO":
            const item = state.bikes.find(({ id }) => id === action.payload);
            return {
                ...state,
                idItem: item
            };

        default:
            return state;
    };
};


export default reducer;