const para = document.querySelector('.para');
const user = document.querySelector('.user');
const img = document.querySelector('img');

const testinomials=[
    {name: "Cherise G",
    url: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    },
    {
        name:"Rosetta Q",
        url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels."
    },
    {
        name: "Constantine V",
        url: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    },
];

idx = 0;

update_testinomial();

function update_testinomial(){
    const{name,url,text} = testinomials[idx];
    user.innerText = name;
    img.src = url;
    para.innerText = text;

    idx++;

    if(idx === testinomials.length){
        idx = 0;
    }

    setTimeout(()=>{
        update_testinomial();
    },3000);

}

