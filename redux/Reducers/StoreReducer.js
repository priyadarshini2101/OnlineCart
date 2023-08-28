import { IntialState } from "../store/IntialState";

export function StoreReducer(state = IntialState.StoreItems,action){
    switch(action.type){
        case 'ADD_ITEM':{
            // debugger
            const id = action.input;
            const key = Object.keys(state).find(elem=> state[elem].id === id)
            const selected = [...state[key].selected]
            selected.push(0)
            return{
                ...state,
                [key]: {
                    id,
                    selected
                }
            }
        }

        case 'REMOVE_ITEM':{
            const id = action.input;
            const key = Object.keys(state).find(elem=> state[elem].id === id)
            const selected = [...state[key].selected]
            selected.pop(0)
            return{
                ...state,
                [key]:{
                    id,
                    selected
                }
            }
        }

        case 'REMOVEALL_ITEM':{
            const id = action.input;
            const key = Object.keys(state).find(elem=> state[elem].id === id)
            const selected = [];
            
            return{
                ...state,
                [key]:{
                    id,
                    selected
                }
            }
        }
        default:return state;
    }
}