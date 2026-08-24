const dice = document.querySelector('.dice');
const btn = document.querySelector('.btn');
const rollhistory = document.getElementById('roll-history')

const history = [];

function rolldice() {
    const rollresult = Math.floor(Math.random() * 6) + 1;
    const diceface = getdiceface(rollresult);
    dice.innerHTML = diceface;
    history.push(rollresult);
    updateRollhistory();
}

function getdiceface(rollresult) {
    switch (rollresult) {

        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default: 
            return "";
    }
}

function updateRollhistory(){
    rollhistory.innerHTML = "";
    for(i = 0; i<history.length; i++){
        const listitem = document.createElement("li");
        listitem.innerHTML =`Roll ${i+1}: <span> ${getdiceface(history[i])}</span>`;
        rollhistory.appendChild(listitem);
    }

}

btn.addEventListener('click',()=>{
    dice.classList.add("roll-animation");
    setTimeout(()=>{
        dice.classList.remove("roll-animation");
        rolldice();
    },1000);
});
