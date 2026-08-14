let allinputs = document.querySelectorAll('input');
allinputs.forEach(input =>{
    input.addEventListener('keydown', (event) =>{

        if(event.key == "Enter"){
            event.preventDefault();

            const activeinput = event.target;
            const enteredvalue =Number(activeinput.value);

            allinputs.forEach(otherinput =>{
                if(otherinput.id == activeinput.id){
                    otherinput.value = enteredvalue;
                }else if(otherinput.id == 'fahrenheit'){
                    if(activeinput.id == 'celsius'){
                        let fahren =  (enteredvalue * 9/5) + 32;
                        otherinput.value = fahren;
                    } 
                    else if(activeinput.id == 'kelvin'){
                        let fahren =  (enteredvalue * 9/5) - 459.67
                        otherinput.value = fahren;
                    } 
                }else if(otherinput.id == 'kelvin'){
                    if(activeinput.id == 'celsius'){
                        let kelvin = enteredvalue + 273.15;
                        otherinput.value = kelvin;                
                    } 
                    else if(activeinput.id == 'fahrenheit'){
                        let kelvin  =  (enteredvalue + 459.67) * 5/9;
                        otherinput.value = kelvin;
                    } 
                }else if(otherinput.id == 'celsius'){
                    if(activeinput.id == 'fahrenheit'){
                        let celsius =   (enteredvalue - 32) / (9/5)
                        otherinput.value = celsius;                
                    } 
                    else if(activeinput.id == 'kelvin'){
                        let celsius  =  enteredvalue - 273.15
                        otherinput.value = celsius;
                    }
                }
            })
        }
    })
})