
const reducer = (state, action) => {

    if (state === undefined){
        state = {
            items: 0
        }
    }

    switch(action.type){

        case "INCREMENT_ITEMS":
            return {
                ...state,
                items: state.items + action.data
            }

        case "DECREMENT_ITEMS":
            return {
                ...state,
                items: state.items - action.data
            }

        default:
            return state
    }

}

export default reducer;