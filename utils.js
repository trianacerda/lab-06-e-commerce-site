export function findById(items, id){
    for (const booger of items) { 
        if (booger.id === id) {
            return booger; 
        }
    }
}

export function toUSD(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });
}

export function renderTableRow(cookieItem, cartItem){
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = cookieItem.name;
    tr.appendChild(tdName);


    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUSD(cookieItem.price);
    tr.appendChild(tdPrice);


    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);


    const tdTotal = document.createElement('td');
    const total = calcItemTotal(cookieItem, cartItem);
    tdTotal.textContent = total;
    tr.appendChild(tdTotal);

    return tr;

}

export function cartTotal(cookies, cart){
    let cartTotal = 0;
    for (let booger of cart) {
        const cookie = findById(cookies, booger.id);
        cartTotal += cookie.price * booger.qty;
    }
    return cartTotal;
}

export function calcItemTotal(cookieItem, cartItem){
    const itemTotal = cookieItem.price * cartItem.qty;
    return toUSD(itemTotal);
}
