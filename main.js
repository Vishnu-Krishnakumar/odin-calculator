let var1 = null;
let var2 = null;
let oper = null;
let total = null;
const value = document.querySelectorAll("#value");
const operators = document.querySelectorAll("#operator");
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");
const current = document.querySelector("#current-operation");
const prevOperation = document.querySelector("#previous-operation");

function add(num1, num2){
    console.log(num1 + num2);
    return (num1+num2);
}

function subtract(num1,num2){
    return num1-num2;
}

function divide(num1,num2){

    return num1/num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function operate(num1,num2,operator){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log(num2);
    switch(operator){
        case "+":
            total = add(num1,num2);
            return total;
            break;
        case "-":
            total = subtract(num1,num2);
            return total;
            break;
        case "/":
            total = divide(num1,num2);
            return total;
            break;
        case "*":
            total = multiply(num1,num2);
            return total;
    }
}
function clearVar(){
    var1 = null;
    var2 = null;
    oper = null;
    prevOperation.textContent = "";
    current.textContent = "";
    total = null;
}


value.forEach((button)=>
    button.addEventListener ('click',() =>{
        let number = button.textContent

        if(var1 === null){
                var1 = number;
                current.textContent = var1
        }
        else if (prevOperation.textContent === ""){
            if(number === 0){
                current.textContent = var1 * 10;
                var1 = var1*10;
            }
            else
            {
                var1 = var1+number;
                current.textContent = var1;
            }
        }
        else if ( oper === null){
            return;
        }
        else{
            if (var2 === null){
                var2 = number;
                current.textContent = var2;
            }
            else if( number === 0){
                current.textContent = var2 * 10;
                var2 = var2*10
            }
            else
            {
                var2 = var2+number;
                current.textContent = var2;
            }  
        }
        
    }))

operators.forEach((button)=>
    button.addEventListener ('click', ()=>{
        oper = button.textContent;
        if(total !== null){
            var2 = null;
            prevOperation.textContent = total + " " + oper;
            current.textContent = total;
        }
        else
        prevOperation.textContent = var1 + " " + oper ;
    })
)

equals.addEventListener('click', ()=>{
    if(var1 === null || var2 === null){
        return;
    }
    if(total !== null){
        if(divZeroCheck(oper,var2)){
            alert("Can't divide with zero dummy")
            return;
        }
        prevOperation.textContent = total + " " + oper + " " + var2 + " = ";
        current.textContent = operate(total,var2,oper);
    }
    else{
        if(divZeroCheck(oper,var2)){
            alert("Can't divide with zero dummy")
            return;
        }
        prevOperation.textContent = var1 + " " + oper + " " + var2 + " =";
        current.textContent = operate(var1,var2,oper);
    }
    
})
clear.addEventListener('click', ()=> {
    clearVar()
})

del.addEventListener('click',()=>{
    current.textContent = current.textContent
        .toString()
        .slice(0,-1);
    var2 = current.textContent;
    if(total !== null){
        total = var2;
    }
})

function divZeroCheck(oper,val){
    if(oper === "/" && val === 0 || val === "0"){
        return true;
    }
    else
    return false;
}