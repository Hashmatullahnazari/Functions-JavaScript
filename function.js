
// var output = document.getElementById("output");


// function myFun()
// {
//   output.innerHTML = output.innerHTML + " hello <br>";
// }





// myFun();


// var output = document.getElementById('output');

// var a = myFun();

// function myFun()
// {

// return "okay";

// }


// var output = document.getElementById('output');
// output.innerHTML = myFun();


// function myFun()
// {

// return "okay";

// }


// var output = document.getElementById('output');

// output.innerHTML = myFun(4,5,6);


// function myFun(a,b,c)
// {
// var response = a + b + c;
// return response;

// }




// var output = document.getElementById('output');

// var response = '55';//global

// myFun(4,5,6);


// function myFun(a,b,c)
// {
// var response = a + b + c; //global
//  output.innerHTML = response; //local
// return response;

// }

// var a = "hello";

// output.innerHTML = myFun2();


// function myFun2(){
//   var b = a + " " + 'world';
//   return b;
// }




// var output = document.getElementById("output");
// var num1 = document.getElementById("num1");
// var num2 = document.getElementById("num2");



// function addBy()
// {
//   output.innerHTML = Number(num1.value) + Number(num2.value);
//   console.log (Number(num1.value) + Number(num2.value));

// }


// function subBy()
// {
//   output.innerHTML = Number(num1.value)  +  Number(num2.value);
//   console.log (Number(num1.value) - Number(num2.value));

// }



var output = document.getElementById("output");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");



function addBy()
{
  var a = Number(num1.value);
  var b = Number(num2.value);
  var c = a + b;
  output.innerHTML = output.innerHTML + a + "+" + b + "=" + c + "<br>" ;
  console.log (Number(num1.value) + Number(num2.value));

}


function subBy()
{
   var a = Number(num1.value);
  var b = Number(num2.value);
  var c = a - b;
  output.innerHTML = a + "-" + b + "=" + c ;
  console.log (Number(num1.value) - Number(num2.value));

}





























