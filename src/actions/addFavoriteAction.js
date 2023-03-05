let uniqueID = 0;

let iterate = () => {
    uniqueID += 1;
    return uniqueID;
}

const addFavoriteAction = (name, image, category, marvelID) => {

    return {
        type: "ADD_FAVORITE",
        data: { name, image, category, marvelID },
        id: iterate()
    }

}

export default addFavoriteAction;