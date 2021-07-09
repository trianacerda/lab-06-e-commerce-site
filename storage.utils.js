import { findById } from './utils.js';

//functions for storage.tests.js 
export const CART = 'COOKIE-CART';

export function getCartLs(){
    let stringCart = localStorage.getItem(CART) || '[]';
    const cart = JSON.parse(stringCart);
    return cart;
}

function setCart(cart){
    localStorage.setItem(CART, JSON.stringify(cart));
}
export function addItemtoCartById(cookieId){
    const cart = getCartLs();
    const cookie = findById(cart, cookieId);

    if (cookie) {
        cookie.qty += 1;
    } else {
        const newCookie = { id: cookieId, qty: 1 };
        cart.push(newCookie);
    }
    setCart(cart);
}

export function clearCart(){
    localStorage.removeItem(CART);
}

