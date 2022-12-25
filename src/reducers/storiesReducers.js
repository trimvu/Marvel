
const storiesReducer = (state, action) => {

    if (state === undefined){
        state = {
            items_stories: 0
        }
    }

    switch(action.type){

        case "INCREMENT_STORIES_ITEMS":
            return {
                ...state,
                items_stories: state.items_stories + action.data
            }

        case "DECREMENT_STORIES_ITEMS":
            return {
                ...state,
                items_stories: state.items_stories - action.data
            }

        default:
            return state
    }

}

export default storiesReducer;