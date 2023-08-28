import { createStore } from "redux";

import { rootReducer } from "../Reducers/rootReducer";

export function configureStore(IntialState){
    return createStore(rootReducer,IntialState)
}