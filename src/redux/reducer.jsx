const obj = {
    data: [],
    favoriteList: [],
    inputValue: "",
    favoritesListName: "",
    lists: []
}

function reducer(state = obj, action) {
    switch(action.type) {
        case "input_change": 
            return state = {
                        ...state, 
                        inputValue: action.value}
        case "submit_form": 
            return state = {
                        ...state, 
                        data: action.dataFromApi, 
                        inputValue: ""}
        case "favorite_list_change": 
            return state = {
                        ...state, 
                        favoriteList: [action.data, ...state.favoriteList]}
        case "reset":
            return state = {
                        ...state, 
                        data: []}
        case "delete_element":
            state.favoriteList.splice(action.index, 1)
            return state = {
                        ...state, 
                        favoriteList: [...state.favoriteList]}
        case "favourites_list_name_value":
            return state = {
                        ...state, 
                        favoritesListName: action.value}
        case "create_list":
            return state = {
                        ...state, 
                        favoritesListName: "", 
                        lists: [...state.lists, action.payload], 
                        favoriteList: []}
        default: return state;
    }
}

export {reducer}