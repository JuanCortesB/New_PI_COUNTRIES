import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducer"
///applyMiddleware es para acciones asincontras igual que el thunk
import {composeWithDevTools} from "redux-devtools-extension"

 const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store