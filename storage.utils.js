import { findById } from './utils.js';
import cookies from './data/cookie-jar.js';

//functions for storage.tests.js 
export const CART = 'COOKIE-CART';
export const PRODUCTS = 'COOKIES';

export function getProducts(){
    let cookies1 = localStorage.getItem(PRODUCTS);
    if (!cookies1){
        cookies1 = JSON.stringify(cookies);
        localStorage.setItem(PRODUCTS, cookies);
    }
    const parsedCookie = JSON.parse(cookies1);
    return parsedCookie;
}

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

