export const fetchCats  = (id = "", loadCount = 10) => {
    return async function(dispatch) {
        dispatch ( {type: "START_FETCHING"} )
        fetch(`https://api.thecatapi.com/v1/images/search?limit=${loadCount}&category_ids=${id}`)
            .then(response => response.json())
            .then(categories => {
                dispatch ( {type: "END_FETCHING"} )
                dispatch ({
                    type: "FETCH_CATS",
                    payload: categories
                    })
            })
    }
}