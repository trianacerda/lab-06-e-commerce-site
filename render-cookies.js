export function renderCookies(cookies){

    const cookiesLi = document.createElement ('li'); 
    const cookiesh3 = document.createElement('h3'); //name
    cookiesh3.textContent = cookies.name;
    
    const cookiesImg = document.createElement ('img'); //img
    cookiesImg.src = `./assets/${cookies.img}`;
    cookiesImg.alt = cookies.name;

    const cookiesSpan = document.createElement ('span'); //price
    cookiesSpan.textContent = `$${cookies.price}`;

    const cookiesSpan1 = document.createElement ('span'); //description
    cookiesSpan1.textContent = `${cookies.description}`;

    const cookiesBtn = document.createElement('button'); //button
    cookiesBtn.textContent = 'Add to Jar';
    cookiesBtn.classList.add('add');
    cookiesBtn.value = cookies.id;

    const dropDown = document.createElement('select');
    const one = document.createElement('option');
    one.textContent = '1';
    one.value = 1;
    const two = document.createElement('option');
    two.textContent = '2';
    two.value = 2;
    const three = document.createElement('option');
    three.textContent = '3';
    three.value = 3;
    dropDown.append(one, two, three);


    cookiesLi.appendChild(cookiesh3);
    cookiesLi.appendChild(cookiesImg);
    cookiesLi.appendChild(cookiesSpan);
    cookiesLi.appendChild(cookiesBtn);
    cookiesLi.appendChild(cookiesSpan1);
    cookiesLi.appendChild(dropDown);

    
    return cookiesLi;
}
