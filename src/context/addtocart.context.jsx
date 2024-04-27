import { createContext, useEffect, useReducer} from "react";

const addToCartNewItem = (cartItems, newCartItem) => {
    const allreadyInCart = cartItems.find((cartItem) => cartItem.marime === newCartItem.marime && cartItem.culoare === newCartItem.culoare && cartItem.pret === newCartItem.pret)
    if (allreadyInCart) {
        return cartItems.map((cartItem) => cartItem.marime === newCartItem.marime && cartItem.culoare === newCartItem.culoare && cartItem.pret === newCartItem.pret
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    }
    const updatedCartItems = [...cartItems, newCartItem];
    return updatedCartItems
}
const decreaseQuantityOfCart=(cartItems, item)=>{
    const removeItem = cartItems.find((cartItem) => cartItem.marime === item.marime && cartItem.culoare === item.culoare && cartItem.pret === item.pret)
    if (removeItem.quantity === 1) {
        const updatedCart = cartItems.filter((cartItem) => !(cartItem.marime === item.marime && cartItem.culoare === item.culoare && cartItem.pret === item.pret));
        return updatedCart
    }
    return cartItems.map((cartItem) => cartItem.marime === item.marime && cartItem.culoare === item.culoare && cartItem.pret === item.pret
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem)
}
const increaseQuantityOfCart = (cartItems, item)=>{
    return cartItems.map((cartItem) => cartItem.marime === item.marime && cartItem.culoare === item.culoare && cartItem.pret === item.pret
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem)
}


export const Cartcontext=createContext({
    cartItems:[],
    setCartItems:()=>{},
    addToCart:()=>{},
    increaseQuantity: ()=>{},
    decreaseQuantity: ()=>{},
    total: 0,
})
export const cartItem_Action_type={
    cartItems:"cartItems",
    reinitialized:"paymentSucces"
}

const cartItemsReducers=(state, action)=>{
    const {type, payload}=action
    switch(type){
        case cartItem_Action_type.cartItems:
        return {
            ...state, 
            ...payload
        }
        case cartItem_Action_type.reinitialized:
            return {
                ...payload
            }
        default:
            throw new Error(`unhandled action type ${type} in cartItemsReducers`)
    }
}

const Initial_state={
    cartItems: [],
    total: 0
}
export const CartProvider=({children})=>{
    useEffect(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
            dispatch({ type: cartItem_Action_type.cartItems, payload: JSON.parse(storedCartItems) });
        }
    }, []);
    const [{ cartItems, total }, dispatch] = useReducer(cartItemsReducers, Initial_state)
    const updatedCartItems = (newCartItems)=>{
        const pretTotal = newCartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity * cartItem.pret;
        }, 0);
        dispatch({ type: cartItem_Action_type.cartItems, payload: { cartItems: newCartItems, total: pretTotal } })
    }
    const setCartItems= (cartItem)=>{
        dispatch({
            type: cartItem_Action_type.reinitialized, payload: { cartItems: cartItem, total: 0 }
    })}
    const increaseQuantity = (item) => {
        const newCartItem=increaseQuantityOfCart(cartItems, item)
        updatedCartItems(newCartItem)
    }
    const decreaseQuantity = (item)=>{
        const newCartItem =decreaseQuantityOfCart(cartItems, item)
        updatedCartItems(newCartItem)
    }
    const addToCart=(item)=>{
        const newCartItem = addToCartNewItem(cartItems, item)
        updatedCartItems(newCartItem)

    }
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems]);
    const value = { cartItems, increaseQuantity, addToCart, decreaseQuantity, total, setCartItems }
    return (
        <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>
    )
}