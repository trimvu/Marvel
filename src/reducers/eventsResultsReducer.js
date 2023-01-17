
const eventsResultsReducer = (state, action) => {

    if (state === undefined){
        state = {
            items_events_results: 0
        }
    }

    switch(action.type){

        case "INCREMENT_EVENTS_RESULTS_ITEMS":
            return {
                ...state,
                items_events_results: state.items_events_results + action.data
            }

        case "DECREMENT_EVENTS_RESULTS_ITEMS":
            return {
                ...state,
                items_events_results: state.items_events_results - action.data
            }

        case "RESET_EVENTS_RESULTS_ITEMS":
            return {
                ...state,
                items_events_results: 0
            }

        default:
            return state
    }

}

export default eventsResultsReducer;