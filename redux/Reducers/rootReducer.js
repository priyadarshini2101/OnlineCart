import { combineReducers } from "redux";
import { StoreReducer as items } from "./StoreReducer";


export const rootReducer = combineReducers({
    items:items
})