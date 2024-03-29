import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messagesReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

