export const fetchCategories = () => {
    return async function(dispatch) {
        fetch("https://api.thecatapi.com/v1/categories ")
            .then(response => response.json())
            .then(categories => {
                dispatch ({
                    type: "FETCH_CATEGORIES",
                    payload: categories
                    })
            })
    }
}