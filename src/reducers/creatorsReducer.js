
const creatorsReducer = (state, action) => {

    if (state === undefined){
        state = {
            items_creators: 0
        }
    }

    switch(action.type){

        case "INCREMENT_CREATORS_ITEMS":
            return {
                ...state,
                items_creators: state.items_creators + action.data
            }

        case "DECREMENT_CREATORS_ITEMS":
            return {
                ...state,
                items_creators: state.items_creators - action.data
            }

        case "RESET_CREATORS_ITEMS":
            return {
                ...state,
                items_creators: 0
            }

        default:
            return state
    }

}

export default creatorsReducer;