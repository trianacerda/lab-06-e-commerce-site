// import functions renderCookies and grab DOM elements
import { renderCookies } from './render-cookies.js';
import cookies from './data/cookie-jar.js';
//console.log(cookies);
// import cookies(list) from cookie-jar

// initialize state
const cookiesUL = document.getElementById('cookies');


// set event listeners -LOOP HERE
for (let booger of cookies){
    const cookiesLi = renderCookies(booger);
    cookiesUL.appendChild(cookiesLi);
}
