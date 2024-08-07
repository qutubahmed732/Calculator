
var input1 = document.querySelector('.inputText');
function clearText (){
    input1.value = "0"
}

var input2 = document.querySelector('.inputText');
function getNumber(num){
    input2.value += num;
    console.log(num);
}

var input3 = document.querySelector('.inputText');
function getResult(){
    input3.value = eval(input3.value)
    
}