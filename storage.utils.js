import { findById } from './utils.js';

//functions for storage.tests.js 
let CART = 'cookie-cart';

export function getCartLs(){
    let stringCart = localStorage.get(CART) || '[]';
    const cart = JSON.parse(stringCart);
    return cart;
}

export function addItemtoCartById(cookieId){
    const cart = getCartLs();
    const cookie = findById(cart, cookieId);

    if (cookie) {
        cookie.qty ++;
    } else {
        const newCookie = { id: cookieId, qty: 1 };
        cart.push(newCookie);
    }
}
