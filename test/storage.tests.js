//tests for storage.utils.js
import { CART, getCartLs, addItemtoCartById } from '../storage.utils.js';

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
}

test('getCartLs should return empty array if empty cart', (expect) => {
    localStorage.removeItem(CART);
    const cart = getCartLs();
    const expected = [];

    expect.deepEqual(cart, expected);
}


test('addItemtoCartById', (expect) => {
    const fakeCart = [
        { id:1, qty: 3 },
        { id:2, qty: 4 }
    ]; 

    addItemtoCartById(1)

    const expected = [
        { id:1, qty: 4 },
        { id:2, qty: 4 }
    ];
}
