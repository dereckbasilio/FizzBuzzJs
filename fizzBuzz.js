/*
	write a function the prints out the numbers from 1 to 100
	if the number is divsable by 3 print Fizz
	if the number is divsable by 5 print Buzz
	if the number is divsable by 3 and 5 print FizzBuzz
*/
$(document).ready(function(){
	var FizzBuzz = function (){
		var fizzList = "";
		for(var i = 1; i <= 100; i++){
			if(i % 15 === 0){
				fizzList += "FizzBuzz<br>";
			}
			else if (i % 3 === 0){
				fizzList += "Fizz<br>";
			}
			else if(i % 5 ===0){

				fizzList += "Buzz<br>";
			}
			else {

				fizzList += i + "<br>";
			}	
		}
		$("p").html(fizzList);
	};
	FizzBuzz();
});