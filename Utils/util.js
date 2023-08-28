
//Adding items to cart while adding from buttons.

export function calculateSelectedItems(input){

    let item1 = 0;
    if(input){
    Object.keys(input).forEach((elem)=>{
        item1+= input[elem].selected.length;
    });
}

    return item1;
}

//Added item value is greater than '0' ,add item to cart and work the button + and - and remove
//else Show the button Add to Cart.

export function isCartContainsSubItem(id,state){
    const key = Object.keys(state).find(elem=> state[elem].id === id);
    return state[key].selected.length > 0 ? true : false; 
}


//Updating the span ie;count of each Item .updates in the span count.
export function isgetNumberOfItemsOfSubItem(id,state){
    const key = Object.keys(state).find(elem=> state[elem].id === id);
    return state[key].selected.length;
}