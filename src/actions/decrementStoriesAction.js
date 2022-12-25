
const decrementStoriesAction = (num) => {

    return {
        type: "DECREMENT_STORIES_ITEMS",
        data: num
    }

}

export default decrementStoriesAction;