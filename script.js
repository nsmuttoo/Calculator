let leftNum =""
let rightNum =""
let operator=""

function clear(){
     leftNum =""
     rightNum =""
     operator=""
}

function number(numb){
    if(operator == ""){
        leftNum = leftnum + numb.toString()
    }
    rightNum = rightNum+numb.toString()
}


function operate(left,symbol,right){
    if(symbol == "+"){
        return add(left,right)
    }

    if(symbol == "-"){
        return subtract(left,right)
    }

    if(symbol == "*"){
        return multiply(left,right)
    }

    if(symbol == "/"){
        if(right == 0){
            return "ERROR"
        }
        return divide(left,right)
    }
}

function add(num1,num2){
    return num1+num2
}

function subtract(num1,num2){
    return num1-num2
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1,num2){
    return num1/num2
}