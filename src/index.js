import './sass/main.scss';
import "../images/bg-bottom.svg";
import "../images/bg-top.svg";

const input = document.querySelector('input');
const h2 = document.querySelectorAll('h2') //all h2

const numbersAnnually = [199.99, 249.99, 399.99]

const numbersMonthly = [19.99, 24.99, 39.99]

input.addEventListener('change', () => {
    if (input.checked) {
        for (let i = 0; i < numbersMonthly.length; i++) {
            h2[i].textContent = numbersMonthly[i]
        }
    } else {
        for (let i = 0; i < numbersAnnually.length; i++) {
            h2[i].textContent = numbersAnnually[i]
        }
    }
})