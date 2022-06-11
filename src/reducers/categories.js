const categoriesReducer = (state = [], action) => {
    switch(action.type) {
        case "FETCH_CATEGORIES":
            return state = action.payload
        default: 
            return state
    }
}

export default categoriesReducer