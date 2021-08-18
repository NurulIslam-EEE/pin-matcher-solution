// generate random number

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


// keyboard


document.getElementById('key-pad').addEventListener('click', function(event){
const number = event.target.innerText; // key inner text
const calcInput = document.getElementById('typed-numbers'); //display select
if(isNaN(number)){
    
    if(number =='C'){
        calcInput.value='';
    }
}else{
    
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value=newNumber;
}

})

// verify pin 

function verifyPin(){
   const pin = document.getElementById('display-pin').value;
   console.log(typeof pin);
   const typedNumbers = document.getElementById('typed-numbers').value;
   console.log(typeof typedNumbers);
   const success =document.getElementById('notify-success');
   const failedError = document.getElementById('notify-failed');
   if(pin== typedNumbers){
    
    success.style.display ='block';
    failedError.style.display ='none';

   }else{
    success.style.display ='none';
    failedError.style.display ='block';
   }
}