//here we will be building all the application local state and define actions to make the state changes 
export  const initialState = {
    basket:[],//empty array to store all the product pushed into the data layer and retrieve the products from the data
};
//Selector
//getting basket total
//amount acting as an accumulator,item is the items inside the basket
export const getBasketTotal = (basket) =>{
    return(basket?.reduce((amount,item)=>item.price + amount ,0));
}
//state has the current state of our data layer and action is to make the changes to the state
const Reducer = (state,action) => {
switch(action.type){
    case "Add_To_Basket":
    return {
        ...state,
        basket:[...state.basket,action.item],
    }
    case "Remove_From_Basket":
        const index = state.basket.findIndex(
            (basketItem)=>basketItem.id === action.Id
        );
        let newbasket= [...state.basket];
        //
        if(index >=0){
            newbasket.splice(index,1);//Removes 1 element starting from index
        }
        else{
            console.warn(`Can't remove product(id: ${action.Id}) as its not in the basket!`)
        }
        return{
            ...state,
            basket: newbasket
        }
    default:
        return state; // Return the current state if action type doesn't match
}
}
export default Reducer;