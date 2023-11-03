import {combineReducers} from "redux";
import authenticateReducer from "./authenticate";
import polygonsReducer from "./polygons";
import usersReducer from "./users";


const rootReducer = combineReducers({
    auth: authenticateReducer,
    polygons:polygonsReducer,
    users:usersReducer
})

export default rootReducer
