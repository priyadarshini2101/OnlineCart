export function addItem(inputFromComponent){
    return{
        type:'ADD_ITEM',
        input:inputFromComponent
    };
}

export function removeItem(inputFromComponent){
    return{
        type:'REMOVE_ITEM',
        input:inputFromComponent
    }
}

export function removeAllSubItems(inputFromComponent){
    return{
        type:'REMOVEALL_ITEM',
        input:inputFromComponent
    }
}