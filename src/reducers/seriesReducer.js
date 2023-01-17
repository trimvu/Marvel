
const seriesReducer = (state, action) => {

    if (state === undefined){
        state = {
            items_series: 0
        }
    }

    switch(action.type){

        case "INCREMENT_SERIES_ITEMS":
            return {
                ...state,
                items_series: state.items_series + action.data
            }

        case "DECREMENT_SERIES_ITEMS":
            return {
                ...state,
                items_series: state.items_series - action.data
            }

        case "RESET_SERIES_ITEMS":
            return {
                ...state,
                items_series: 0
            }

        default:
            return state
    }

}

export default seriesReducer;