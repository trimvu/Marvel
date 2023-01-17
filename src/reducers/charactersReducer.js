
const charactersReducer = (state, action) => {

    if (state === undefined){
        state = {
            items_characters: 0
        }
    }

    switch(action.type){

        case "INCREMENT_CHARACTERS_ITEMS":
            return {
                ...state,
                items_characters: state.items_characters + action.data
            }

        case "DECREMENT_CHARACTERS_ITEMS":
            return {
                ...state,
                items_characters: state.items_characters - action.data
            }

        case "RESET_CHARACTERS_ITEMS":
            return {
                ...state,
                items_characters: 0
            }

        default:
            return state
    }

}

export default charactersReducer;