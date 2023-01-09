
const comicResultsReducer = (state, action) => {

    if (state === undefined){
        state = {
            items_comic_results: 0
        }
    }

    switch(action.type){

        case "INCREMENT_COMIC_RESULTS_ITEMS":
            return {
                ...state,
                items_comic_results: state.items_comic_results + action.data
            }

        case "DECREMENT_COMIC_RESULTS_ITEMS":
            return {
                ...state,
                items_comic_results: state.items_comic_results - action.data
            }

        default:
            return state
    }

}

export default comicResultsReducer;