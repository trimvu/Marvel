
const seriesResultsReducer = (state, action) => {

    if (state === undefined){
        state = {
            items_series_results: 0
        }
    }

    switch(action.type){

        case "INCREMENT_SERIES_RESULTS_ITEMS":
            return {
                ...state,
                items_series_results: state.items_series_results + action.data
            }

        case "DECREMENT_SERIES_RESULTS_ITEMS":
            return {
                ...state,
                items_series_results: state.items_series_results - action.data
            }

        default:
            return state
    }

}

export default seriesResultsReducer;