
const deleteFavoriteAction = (id) => {

    return {
        type: "DELETE_FAVORITE",
        id,
    }

}

export default deleteFavoriteAction;