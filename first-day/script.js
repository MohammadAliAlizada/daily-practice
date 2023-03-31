		//function to sum two numbers
		function sum() {

			var num1 = parseFloat(document.getElementById("num1").value);
			var num2 = parseFloat(document.getElementById("num2").value);

			if(num1<0 && num2<0){
				var result = num1 + num2;
				document.getElementById("result").innerHTML = "The sum is: " + result;
			}
			else if(num1<0 || num2 <0){

				document.getElementById("result").innerHTML = "You! entered negative number";
			}
			else{

				var result = num1 + num2;
				document.getElementById("result").innerHTML = "The sum is: " + result;
			}
		}