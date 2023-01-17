
const eventsReducer = (state, action) => {

    if (state === undefined){
        state = {
            items_events: 0
        }
    }

    switch(action.type){

        case "INCREMENT_EVENTS_ITEMS":
            return {
                ...state,
                items_events: state.items_events + action.data
            }

        case "DECREMENT_EVENTS_ITEMS":
            return {
                ...state,
                items_events: state.items_events - action.data
            }
        
        case "RESET_EVENTS_ITEMS":
            return {
                ...state,
                items_events: 0
            }

        default:
            return state
    }

}

export default eventsReducer;