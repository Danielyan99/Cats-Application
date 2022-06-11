import { combineReducers  } from "redux";
import categories from "./categories"
import cats from "./cats"

const rootReducer = combineReducers({
    categories,
    cats
})

export default rootReducer