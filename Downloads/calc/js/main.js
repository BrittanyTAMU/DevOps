let total = 0
let num1 = ''
let num2 = ''
let operator = ''
let display = ''


document.querySelector('#clickZone').addEventListener('click', displayCalc)

document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)

document.querySelector('#plus').addEventListener('click', plus)
document.querySelector('#minus').addEventListener('click', minus)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#divide').addEventListener('click', divide)

document.querySelector('#equal').addEventListener('click', equal)
document.querySelector('#clear').addEventListener('click', clear)

function zero(){
  
  if(operator === ''){
    num1 = num1 + '0'
  }else{
    num2= num2 + '0'
  }
}

function one(){
  
  if(operator === ''){
    num1 = num1 + '1'
  }else{
    num2= num2 + '1'
  }
}

function two(){
  
  if(operator === ''){
    num1 = num1 + '2'
  }else{
    num2= num2 + '2'
  }
}

function three(){
  
  if(operator === ''){
    num1 = num1 + '3'
  }else{
    num2= num2 + '3'
  }
}

function four(){
  
  if(operator === ''){
    num1 = num1 + '4'
  }else{
    num2= num2 + '4'
  }
}

function five(){
  
  if(operator === ''){
    num1 = num1 + '5'
  }else{
    num2= num2 + '5'
  }
}

function six(){
  
  if(operator === ''){
    num1 = num1 + '6'
  }else{
    num2= num2 + '6'
  }
}

function seven(){
  
  if(operator === ''){
    num1 = num1 + '7'
  }else{
    num2= num2 + '7'
  }
}

function eight(){
  
  if(operator === ''){
    num1 = num1 + '8'
  }else{
    num2= num2 + '8'
  }
}

function nine(){
  
  if(operator === ''){
    num1 = num1 + '9'
  }else{
    num2= num2 + '9'
  }
}

function plus(){
  operator = '+'//left as strings so it can be displayed in the display box
}
function minus(){
  operator = '-'//left as strings so it can be displayed in the display box
}
function multiply(){
  operator = '*'//left as strings so it can be displayed in the display box
}
function divide(){
  operator = '/'//left as strings so it can be displayed in the display box
}

function displayCalc(){
  display = num1 + operator + num2
  document.querySelector('#placeToPutEquation').innerText = display
}

function equal(){
  num1 = (+num1)//this shorthand turns a string into a number
  num2 = (+num2)//this shorthand turns a string into a number
  if(operator === '+'){
    total = num1 + num2
  }else if( operator === '-'){
    total = num1 - num2
  }else if( operator === '*'){
    total = num1 * num2
  }else if( operator === '/'){
    total = num1 / num2
  }else{
    total = NaN
  }
  document.querySelector('#placeToPutResult').innerText = total
}

function clear(){
  total = 0
  num1 = ''
  num2 = ''
  operator = ''
  display = 0
  document.querySelector('#placeToPutEquation').innerText = display
  document.querySelector('#placeToPutResult').innerText = total
}