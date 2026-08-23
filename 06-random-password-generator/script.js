const input = document.getElementById('input');
const btn = document.getElementById('button');
const copy = document.querySelector("#copy");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

btn .onclick = function(){
    let result = '';
    for(i = 0; i<12; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        result +=  characters[randomIndex];
    }

    input.value = result;
};

copy.onclick = function () {
  navigator.clipboard.writeText(input.value);
};
