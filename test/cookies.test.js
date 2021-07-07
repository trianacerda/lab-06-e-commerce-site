// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCookies } from '../render-cookies.js';
import { findByID } from '../utils.js';
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
    const actual = findByID(cookies, 4);

    expect.deepEqual(actual, expected);
    
});

test('renderTableRow')

