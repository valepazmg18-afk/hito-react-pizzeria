import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (pizza) => {
        const pizzaExist = cart.find(p => p.id === pizza.id);
        if (pizzaExist) {
           const updatedCart = cart.map((p) => {
            p.id === pizza.id ? {...p, cantidad: p.cantidad + 1} : p;
           });
           setCart(updatedCart);
        } else {
            setCart([...cart, {...pizza, cantidad: 1}]);
        };
    };

    const increase = (id) => {
        const updatedCart = cart.map(p =>
           p.id === id ? {...p, cantidad: p.cantidad + 1} : p
        );
        setCart(updatedCart);
    };

    const decrease = (id) => {
        const updatedCart = cart.map(p =>
           p.id === id ? {...p, cantidad: p.cantidad - 1} : p
        ).filter(p => p.cantidad > 0);
        setCart(updatedCart);
    };

    const total = cart.reduce((acc, p) => acc + p.price * p.cantidad, 0);




    return (
        <CartContext.Provider value={{ cart, addToCart, increase, decrease, total }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;