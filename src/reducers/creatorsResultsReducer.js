
const creatorsResultsReducer = (state, action) => {

    if (state === undefined){
        state = {
            items_creators_results: 0
        }
    }

    switch(action.type){

        case "INCREMENT_CREATORS_RESULTS_ITEMS":
            return {
                ...state,
                items_creators_results: state.items_creators_results + action.data
            }

        case "DECREMENT_CREATORS_RESULTS_ITEMS":
            return {
                ...state,
                items_creators_results: state.items_creators_results - action.data
            }

        case "RESET_CREATORS_RESULTS_ITEMS":
            return {
                ...state,
                items_creators_results: 0
            }

        default:
            return state
    }

}

export default creatorsResultsReducer;