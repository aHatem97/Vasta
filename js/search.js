/* eslint-env es6 */
/* eslint-disable */

const searchBtn = document.getElementById('search-btn');
const searchTxt = document.getElementById('search-text');
const tip = document.getElementById('search-tip');

var i = 0;
var message = 'Enter Search Text';
var speed = 100;

searchBtn.addEventListener('click', () => {
    searchTxt.style.width = '80%';
    searchTxt.style.paddingRight = '40px';
    searchTxt.style.cursor = 'text';
    searchTxt.style.outline = '1.5px solid black';
    
    typeWriter();
})

function typeWriter()
{
    if (i < message.length)
        {
            msg = searchTxt.getAttribute('placeholder') + message.charAt(i);
            searchTxt.setAttribute('placeholder', msg);
            i++;
            setTimeout(typeWriter, speed);
        }
}