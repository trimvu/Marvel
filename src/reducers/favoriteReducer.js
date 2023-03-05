const favoriteReducer = (state, action) => {

    if (state === undefined) {
        state = {
            favorites: [],
            delete: {},
            disableUndo: true
        }
    }

    switch(action.type) {

        case "ADD_FAVORITE":
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    {
                        name: action.data.name,
                        image: action.data.image,
                        category: action.data.category,
                        marvelID: action.data.marvelID,
                        id: action.id
                    }
                ]
            }

        case "DELETE_FAVORITE":
            return {
                ...state,
                favorites: [
                    ...state.favorites.filter(element => (
                        element.id !== action.id
                        // console.log("action", action.id, "element", element.id)
                    )),
                ],
                delete: state.favorites.filter(element => (element.id === action.id))[0],
                disableUndo: false
            }

        case "UNDO_DELETE_FAVORITE":
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    state.delete
                ],
                delete: {},
                disableUndo: true
            }

        default:
            return state
    }

}

export default favoriteReducer;