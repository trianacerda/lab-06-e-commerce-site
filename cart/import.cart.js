import { toUSD, renderTableRow, cartTotal, findById } from '../utils.js';
import cookies from '../data/cookie-jar.js';
import cart from '../data/cart.js';
import { clearCart, } from '../storage.utils.js';

const tableBody = document.getElementById('table-body');

for (let cookieQty of cart) {
    const cookie = findById(cookies, cookieQty.id);
    const tr = renderTableRow(cookie, cookieQty);
    tableBody.appendChild(tr);
}

const totalDom = document.getElementById('order-total');
const total = cartTotal(cookies, cart);
totalDom.textContent = toUSD(total);

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', ()=>{
    clearCart();
    location.reload();
    //location.href = '../index.html';
});


// const placeOrderBtn = document.getElementById('order-btn');
// // placeOrderBtn.addEventListener('click', (e)=> {

