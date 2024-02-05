import { createContext, useCallback, useContext, useEffect, useState} from "react";


export const Cartcontext=createContext({
    cartItems:[  ],
    addToCart:()=>{},
    increaseQuantity: ()=>{},
    decreaseQuantity: ()=>{},
    total: 0,
    
})
export const CartProvider=({children})=>{
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });
    const [total, setTotal]=useState()
    const increaseQuantity = (item) => {
        setCartItems(cartItems.map((cartItem) => cartItem.marime === item.marime && cartItem.culoare === item.culoare && cartItem.pret === item.pret
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem))
       
    }
    const decreaseQuantity = (item)=>{
        const removeItem = cartItems.find((cartItem) => cartItem.marime === item.marime && cartItem.culoare === item.culoare && cartItem.pret === item.pret)
    //    console.log(removeItem.quantity)
        if(removeItem.quantity===1){
            const updatedCart = cartItems.filter((cartItem) => !(cartItem.marime === item.marime && cartItem.culoare === item.culoare && cartItem.pret === item.pret));    
           return  setCartItems(updatedCart)
        }
       return setCartItems(cartItems.map((cartItem) => cartItem.marime === item.marime && cartItem.culoare === item.culoare && cartItem.pret === item.pret
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem))
    }
    const addToCart = (newCartItem) =>{
            const allreadyInCart = cartItems.find((cartItem) => cartItem.marime === newCartItem.marime && cartItem.culoare === newCartItem.culoare && cartItem.pret === newCartItem.pret)
            console.log(allreadyInCart);
            if (allreadyInCart) {
                return setCartItems(cartItems.map((cartItem) => cartItem.marime === newCartItem.marime && cartItem.culoare === newCartItem.culoare && cartItem.pret === newCartItem.pret
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem))
            }
            const updatedCartItems = [...cartItems, newCartItem];
            setCartItems(updatedCartItems);
        }
    useEffect(()=>{
         
       const pretTotal = cartItems.reduce((acc, cartItem) => {
           return acc + cartItem.quantity * cartItem.pret;
       }, 0);
        setTotal(pretTotal);
    }, [cartItems])
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
    const value = { cartItems, setCartItems, increaseQuantity, addToCart, decreaseQuantity, total }
    return (
        <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>
    )
}