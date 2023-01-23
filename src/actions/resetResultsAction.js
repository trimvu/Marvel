
const resetResultsAction = (num) => {

    return {
        type: "RESET_CHARACTERS_RESULTS_ITEMS",
        type: "RESET_COMIC_RESULTS_ITEMS",
        type: "RESET_CREATORS_RESULTS_ITEMS",
        type: "RESET_EVENTS_RESULTS_ITEMS",
        type: "RESET_SERIES_RESULTS_ITEMS",
        data: num
    }

}

export default resetResultsAction;