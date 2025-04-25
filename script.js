let leftNum =""
let rightNum =""
let operator=""

let displayBox = document.createElement("div")
displayBox.className = "displayBox"
let display = document.createElement("DIV")
    display.textContent = leftNum+" " + operator + " " + rightNum
    display.className = "display"
    display.innerHTML = "READY"



function clear(){
     leftNum =""
     rightNum =""
     operator=""
    
     updateDiv()
      display.innerHTML="READY"
}

function number(){
    
    if(operator == ""){
        leftNum = leftNum + this.innerHTML
        updateDiv()
        
    }else{
    rightNum = rightNum+this.innerHTML}
    updateDiv()
}

function addOperator(){
if(leftNum != "" && rightNum == ""){
    operator = this.innerHTML
    console.log(operator)
    updateDiv()
}
}



function operate(){
    if(leftNum != "" && operator!= "" && rightNum!=""){
    left = leftNum
    symbol = operator
    right = rightNum    
    console.log(leftNum + operator + rightNum)
    clear()
    if(symbol == "+"){
        
        leftNum = add(left,right)
        updateDiv()
        
    }

    if(symbol == "-"){
        leftNum = subtract(left,right)
        updateDiv()
    }

    if(symbol == "x"){
        leftNum = multiply(left,right)
        updateDiv()
    }

    if(symbol == "/"){
        if(right == 0){
            return "ERROR"
            updateDiv()
        }
        leftNum = divide(left,right)
        updateDiv()
    }
}
}

function add(num1,num2){
    let store = parseFloat(num1) + parseFloat(num2)
    return store.toString()
}

function subtract(num1,num2){
    let store = parseFloat(num1) - parseFloat(num2)
    return store.toString()
}

function multiply(num1,num2){
    let store = parseFloat(num1) * parseFloat(num2)
    return store.toString()
}

function divide(num1,num2){
    let store = parseFloat(num1) / parseFloat(num2)
    
    store = Math.round(store*10)/10
    return store.toString()
}



function begin(){
    let numbContainer = document.createElement("div")
    numbContainer.className = "numbContainer"

    let opContainer = document.createElement("div")
    opContainer.className = "opContainer"

    let equalsContainer = document.createElement("div")
    equalsContainer.className = "equalsContainer"

    let bigContainer = document.createElement("div")
    bigContainer.className = "bigContatiner"


    let number0 = document.createElement("BUTTON")
    number0.innerHTML = 0
    number0.className = "numb"
    
    let number1 = document.createElement("BUTTON")
    number1.innerHTML = 1
    number1.className = "numb"

    let number2 = document.createElement("BUTTON")
    number2.innerHTML = 2
    number2.className = "numb"

    let number3 = document.createElement("BUTTON")
    number3.innerHTML = 3
    number3.className = "numb"

    let number4 = document.createElement("BUTTON")
    number4.innerHTML = 4
    number4.className = "numb"

    let number5 = document.createElement("BUTTON")
    number5.innerHTML = 5
    number5.className = "numb"

    let number6 = document.createElement("BUTTON")
    number6.innerHTML = 6
    number6.className = "numb"

    let number7 = document.createElement("BUTTON")
    number7.innerHTML = 7
    number7.className = "numb"

    let number8 = document.createElement("BUTTON")
    number8.innerHTML = 8
    number8.className = "numb"

    let number9 = document.createElement("BUTTON")
    number9.innerHTML = 9
    number9.className = "numb"

    let plus = document.createElement("BUTTON")
    plus.innerHTML = "+"
    plus.className = "operator"

    let minus = document.createElement("BUTTON")
    minus.innerHTML = "-"
    minus.className = "operator"

    let times = document.createElement("BUTTON")
    times.innerHTML = "x"
    times.className = "operator"

    let divide = document.createElement("BUTTON")
    divide.innerHTML = "/"
    divide.className = "operator"

    let clearButton = document.createElement("BUTTON")
    clearButton.innerHTML="CLEAR"
    clearButton.className = "clearButton"

    let equalsButton = document.createElement("BUTTON")
    equalsButton.innerHTML = "="
    equalsButton.className = "equalsButton"

    

    displayBox.appendChild(display)

    
  
    numbContainer.appendChild(number1)
    numbContainer.appendChild(number2)
    numbContainer.appendChild(number3)
    numbContainer.appendChild(number4)
    numbContainer.appendChild(number5)
    numbContainer.appendChild(number6)
    numbContainer.appendChild(number7)
    numbContainer.appendChild(number8)
    numbContainer.appendChild(number9)
    numbContainer.appendChild(number0)


   opContainer.appendChild(plus)
    opContainer.appendChild(minus)
    opContainer.appendChild(times)
   opContainer.appendChild(divide)

   
   equalsContainer.appendChild(clearButton)
   equalsContainer.appendChild(equalsButton)

   bigContainer.appendChild(numbContainer)
    bigContainer.appendChild(opContainer)

   document.body.appendChild(displayBox)
    document.body.appendChild(bigContainer)
    document.body.appendChild(equalsContainer)

    

    equalsButton.addEventListener("click",operate)
    clearButton.addEventListener("click",clear)

    eventListen()
}

function eventListen(){
    let listenerNumb = document.getElementsByClassName("numb")
    let listenerOperator = document.getElementsByClassName("operator")


    for(i=0; i<listenerNumb.length; i++){
        listenerNumb[i].addEventListener("click", number,false)
    }

    
    for(j=0; j<listenerOperator.length; j++){
        listenerOperator[j].addEventListener("click",addOperator)
    }



}

function updateDiv(){
    display.textContent = leftNum+" " + operator + " " + rightNum
}

begin()