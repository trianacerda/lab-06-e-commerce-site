//tests for storage.utils.js
import { CART, getCartLs, addItemtoCartById, clearCart, PRODUCTS, getProducts } from '../storage.utils.js';
import cookies from '../data/cookie-jar.js';
const test = QUnit.test;

test('getCartLs return the shopping cart from localStorage as object', (expect) => {
    localStorage.removeItem(CART);
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
    localStorage.removeItem(CART);
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
    localStorage.removeItem(CART);
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

test('setCart should set items in localStorage', (expect) =>{
    localStorage.removeItem('RESULTS');
    const fakeCart = [
        { id:1, qty: 3 },
        { id:2, qty: 4 },
    ]; 

    const fakeCartStr = JSON.stringify(fakeCart);
    localStorage.setItem('CART', JSON.stringify(fakeCartStr));

    clearCart();

    const expected = [];
    const cart = getCartLs();
    expect.deepEqual(cart, expected);

});

test('getProducts returns the list of products from LS', (expect) => {
    localStorage.removeItem(PRODUCTS);
    const fakeCart = [
        { id:1, qty: 3 },
        { id:2, qty: 4 },
    ]; 

    const fakeCartStr = JSON.stringify(fakeCart);
    localStorage.setItem(PRODUCTS, fakeCartStr);

    const actual = getProducts();

    expect.deepEqual(fakeCart, actual);
});

test('getProducts return the default data if nothing is stored in LS', (expect) =>{
    localStorage.removeItem(PRODUCTS);
    const expected = cookies;
    const actual = getProducts();
    expect.deepEqual(expected, actual);
});