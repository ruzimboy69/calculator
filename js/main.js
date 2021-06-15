let a = document.getElementById("A");
let b = document.getElementById("B");
let resultHtml = document.getElementById('result:')
function addNumbers(){
let aNaber = parseFloat(a.value);
let bNaber = parseFloat(b.value);
let result;
if (operation.value === '+')
 result = aNaber + bNaber;
else if (operation.value === '-')
result = aNaber - bNaber;
else if (operation.value === '*')
    result = aNaber * bNaber;
else
    result=aNaber/bNaber;

resultHtml.innerText = 'result:' + result;



}














