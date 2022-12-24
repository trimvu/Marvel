
const decrementAction = (num) => {

    return {
        type: "DECREMENT_ITEMS",
        data: num
    }

}

export default decrementAction;