// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCookies } from '../render-cookies.js';

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
