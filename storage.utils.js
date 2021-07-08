import { findById } from './utils.js';

//functions for storage.tests.js 
export let CART = 'cookie-cart';

export function getCartLs(){
    let stringCart = localStorage.getItem(CART) || '[]';
    const cart = JSON.parse(stringCart);
    return cart;
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
    localStorage.setItem(CART, JSON.stringify(cart));
}

export function clearCart(){
    localStorage.removeItem(CART);
}


