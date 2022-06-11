const catsReducer = (state = { items: [], loading: false}, action) => {
    switch(action.type) {
        case "FETCH_CATS":
            return state = { ...state, items: action.payload }
        case "START_FETCHING": 
            return state = { ...state, loading: true}
        case "END_FETCHING": 
            return state = { ...state, loading: false}
        default: 
            return state
    }
}

export default catsReducer