const amount = document.querySelector('.bill');
const percent = document.querySelector('.tip');
let total = document.querySelector('h2');

const button = document.querySelector('button');

button.onclick = function (){
    const tip_val = (Number(amount.value)*Number(percent.value))/100;
    total.innerText = tip_val;

}
