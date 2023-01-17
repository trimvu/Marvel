
const charactersResultsReducer = (state, action) => {

    if (state === undefined){
        state = {
            items_characters_results: 0
        }
    }

    switch(action.type){

        case "INCREMENT_CHARACTERS_RESULTS_ITEMS":
            return {
                ...state,
                items_characters_results: state.items_characters_results + action.data
            }

        case "DECREMENT_CHARACTERS_RESULTS_ITEMS":
            return {
                ...state,
                items_characters_results: state.items_characters_results - action.data
            }

        case "RESET_CHARACTERS_RESULTS_ITEMS":
            return {
                ...state,
                items_characters_results: 0
            }

        default:
            return state
    }

}

export default charactersResultsReducer;