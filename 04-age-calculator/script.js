const dob = document.getElementById('dob');
const btn = document.getElementById('btn');
const result = document.querySelector('.result')

function calculate_age(){
    const current_date = new Date();
    const birth_date = new Date(dob.value);

    let d_year = current_date.getFullYear() - birth_date.getFullYear();
    let d_month = current_date.getMonth() - birth_date.getMonth();
    let d_day = current_date.getDate() - birth_date.getDate();

    if (d_month < 0 || (d_month === 0 && d_day < 0)) {
        d_year--;
    }

    result.innerText = `Your age is ${d_year} years old`;
}

btn.addEventListener('click', calculate_age);
