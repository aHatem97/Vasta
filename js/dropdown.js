/* eslint-env es6 */
/* eslint-disable */

let click = document.querySelector('.click');
let list = document.querySelector('.list');

click.addEventListener("click", () => {
    list.classList.toggle('newlist');
});