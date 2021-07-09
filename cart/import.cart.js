import { toUSD, renderTableRow, cartTotal, findById } from '../utils.js';
import cookies from '../data/cookie-jar.js';
import { clearCart, getCartLs } from '../storage.utils.js';

// Grab the Table Body
const tableBody = document.getElementById('table-body');
// Render Cart Function
function renderCart(){
    const cart = getCartLs();
    for (let cookie of cart) {
        const cookieItem = findById(cookies, cookie.id);
        const tr = renderTableRow(cookieItem, cookie);
        tableBody.appendChild(tr);
    }
    if (cart.length === 0){
        tableBody.innerHTML = '';
    }
    const totalDom = document.getElementById('order-total');
    const total = cartTotal(cookies, cart);
    totalDom.textContent = toUSD(total);
}
renderCart();

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', ()=>{
    clearCart();
    location.reload();
});


const placeOrderBtn = document.getElementById('order-btn');
const currentCart = getCartLs();
if (getCartLs === 0){
    placeOrderBtn.disabled = true;
} else {
    placeOrderBtn.addEventListener('click', ()=> {
        alert(JSON.stringify(currentCart, true, 2));
        clearCart();
        location.href = '../index.html';
    });

}