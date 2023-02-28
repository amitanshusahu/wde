let queryString = location.search;
// ?data

queryString = queryString.substring(1);
// data


// using it 
let body = document.querySelector("body");
body.innerHTML = `<h3>your data from 1st page is: ${queryString}</h3>`
