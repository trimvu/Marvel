
const decrementEventsAction = (num) => {

    return {
        type: "DECREMENT_EVENTS_ITEMS",
        data: num
    }

}

export default decrementEventsAction;