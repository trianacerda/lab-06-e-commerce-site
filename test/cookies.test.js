import { renderCookies } from '../render-cookies.js';
import { findById, renderTableRow, cartTotal, calcItemTotal } from '../utils.js';
import cookies from '../data/cookie-jar.js';

const test = QUnit.test;

test('test renderCookies', (expect) => {

    const cowboy = {
        id: 'cowboy',
        name: 'cowboy',
        price: 4.00,
        img: 'cowboy.jpeg',
        description: 'mixture of everything but the sink'
    
    };
    
    const expected = `<li><h3>cowboy</h3><img src="./assets/cowboy.jpeg" alt="cowboy"><span>$4</span><button>Add to Jar</button><span>mixture of everything but the sink</span></li>`;
    
    const actual = renderCookies(cowboy);

    expect.equal(actual.outerHTML, expected);
});

test('returns cookie by id', expect => {
    const expected = {
        id: 4,
        name: 'rainbow',
        price: 3.50,
        img: 'rainbow2.jpeg',
        description: 'happiness'
        
    }; 
    const actual = findById(cookies, 4);

    expect.deepEqual(actual, expected);
    
});

test('renderTableRow returns a <tr> element', expect => {
    const rainbow = {
        id: 4,
        name: 'rainbow',
        price: 3.50,
        img: 'rainbow2.jpeg',
        description: 'happiness'
        
    };
    const rainbowCart = {
        id: 4, 
        qty: 2
    };
    const expected = `<tr><td>rainbow</td><td>$3.50</td><td>2</td><td>$7.00</td></tr>`;
    const dom = renderTableRow(rainbow, rainbowCart);
    const html = dom.outerHTML;
    expect.equal(html, expected);
});

test('cartTotal should return total amount in cart', expect=> {
    const cart = [
        { id: 1, qty: 4 },
        { id: 2, qty: 5 }
    ];
    const cartData = [{
        id: 1,
        price: 3
    },
    {
        id: 2,
        price: 4
    }];

    const expected = 32;
    const actual = cartTotal(cartData, cart);
    expect.equal(actual, expected);
});

test('test if calcItemTotal === total amount', expect => {
    const rainbow = { id:1, price: 3.50 };
    const qty = { id: 1, qty: 2 };
    const expected = '$7.00';
    const actual = calcItemTotal(rainbow, qty);
    expect.equal(actual, expected);
});