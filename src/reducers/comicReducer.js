
const comicReducer = (state, action) => {

    if (state === undefined){
        state = {
            items_comic: 0
        }
    }

    switch(action.type){

        case "INCREMENT_COMIC_ITEMS":
            return {
                ...state,
                items_comic: state.items_comic + action.data
            }

        case "DECREMENT_COMIC_ITEMS":
            return {
                ...state,
                items_comic: state.items_comic - action.data
            }

        default:
            return state
    }

}

export default comicReducer;