//console.log("Hello from js!")

/* function pinChecker(pin){
    const getPin = pin;
    const pinString = getPin +'';
    if(pinString.length == 4){
        //console.log("from if:", getPin);
        const gPin = document.getElementById('generated-pin');
        gPin.value = pinString;
    }
    else{
        //console.log("from else:", getPin);
        pinGenerator();
    }
};

function pinGenerator(){
    const pin = Math.round(Math.random()*10000);
    pinChecker(pin);
}; */

//Other way, almost same!
function pinChecker(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin+"";
    if(pinString.length == 4){
        return pinString;
    }
    else{
        pinChecker();
    };
};

function pinGenerator(){
    const pin = pinChecker();
    document.getElementById('generated-pin').value = pin;
};

document.getElementById('key-pad').addEventListener('click', function(event){
    //const number = parseInt( event.target.innerText);
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    };
});

function verifyPin(){
    const pin = document.getElementById('generated-pin').value;
    const typedNum = document.getElementById('typed-numbers').value;

    const right = document.getElementById('right');
    const wrong = document.getElementById('wrong');

    if(pin == typedNum){
        right.style.display = 'block';
        wrong.style.display = 'none';
    }
    else{
        wrong.style.display = 'block';
        right.style.display = 'none';
    };
};