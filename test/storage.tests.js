//tests for storage.utils.js
import { CART, getCartLs, addItemtoCartById, clearCart } from '../storage.utils.js';

const test = QUnit.test;

test('getCartLs return the shopping cart from localStorage as object', (expect) => {
    const fakeCart = [
        { id:1, qty: 3 },
        { id:2, qty: 4 }
    ];
    const fakeCartStr = JSON.stringify(fakeCart);
    localStorage.setItem(CART, fakeCartStr);

    const cart = getCartLs();

    expect.deepEqual(cart, fakeCart);
});
//
test('getCartLs should return empty array if empty cart', (expect) => {
    localStorage.removeItem(CART);
    const cart = getCartLs();
    const expected = [];

    expect.deepEqual(cart, expected);
});
//
test('addItemtoCartById should update qty if cookie already in cart', (expect) => {
    const fakeCart = [
        { id:1, qty: 3 },
        { id:2, qty: 4 },
    ]; 

    const fakeCartStr = JSON.stringify(fakeCart);
    localStorage.setItem(CART, fakeCartStr);

    addItemtoCartById(1);

    const addedOneCart = getCartLs();

    const expected = [
        { id:1, qty: 4 },
        { id:2, qty: 4 },
    ];

    expect.deepEqual(addedOneCart, expected);
});
//
test('clearCart should clear the cart from localStorage', (expect) =>{
    const fakeCart = [
        { id:1, qty: 3 },
        { id:2, qty: 4 },
    ]; 

    const fakeCartStr = JSON.stringify(fakeCart);
    localStorage.setItem(CART, fakeCartStr);

    clearCart();

    const expected = [];
    const cart = getCartLs();
    expect.deepEqual(cart, expected);

});
