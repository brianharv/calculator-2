// Business Logic

	const add = function(number1, number2) {
		return number1 + number2;
	}

	const multiply = function(number1, number2) {
		return number1 * number2;
	}

	const divide = function(number1, number2) {
		return number1 / number2; 
	}

	const subtract = function(number1, number2) {
		return number1 - number2;
	}

	// Everything below this line is user interface logic:

$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt ($("#add1").val());
		const number2 = parseInt ($("#add2").val());
		const result = add(number1, number2);
		$("#output1").text(result);
	});

	$("form#subtract").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt ($("#subtract1").val());
		const number2 = parseInt ($("#subtract2").val());
		const result = subtract(number1, number2);
		$("#output2").text(result);
	});
});
