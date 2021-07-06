export function renderCookies(cookies){

    const cookiesLi = document.createElement ('li'); 
    const cookiesh3 = document.createElement('h3'); //name
    cookiesh3.textContent = cookies.name;
    
    const cookiesImg = document.createElement ('img'); //img
    cookiesImg.src = `./assets/${cookies.img}`;
    cookiesImg.alt = cookies.name;

    const cookiesSpan = document.createElement ('span'); //price
    cookiesSpan.textContent = `${cookies.price}`;

    const cookiesBtn = document.createElement('button'); //button
    cookiesBtn.textContent = 'Add to Jar';


    cookiesLi.appendChild(cookiesh3);
    cookiesLi.appendChild(cookiesImg);
    cookiesLi.appendChild(cookiesSpan);
    cookiesLi.appendChild(cookiesBtn);
    
    
    return cookiesLi;
}
