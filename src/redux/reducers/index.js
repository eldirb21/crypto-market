import assetsReducer from "./assetsReducer";
import authReducer from "./authReducer";
import marketReducer from "./marketReducer";
import mineReducer from "./mineReducer";

const rootReducer = {
    auth: authReducer,
    assets: assetsReducer,
    market: marketReducer,
    mines: mineReducer
}

export default rootReducer