var display = document.getElementById("display");

/* For digit zero*/
document.getElementById("zero").addEventListener("click",function(){
	display.value = display.value + "0";
});

/* For digit point*/
document.getElementById("point").addEventListener("click",function(){
	display.value = display.value + ".";
});

/* For digit one*/
document.getElementById("one").addEventListener("click",function(){
	display.value = display.value + "1";
});

/* For digit two*/
document.getElementById("two").addEventListener("click",function(){
	display.value = display.value + "2";
});

/* For digit three*/
document.getElementById("three").addEventListener("click",function(){
	display.value = display.value + "3";
});

/* For digit four*/
document.getElementById("four").addEventListener("click",function(){
	display.value = display.value + "4";
});

/* For digit five*/
document.getElementById("five").addEventListener("click",function(){
	display.value = display.value + "5";
});

/* For digit six*/
document.getElementById("six").addEventListener("click",function(){
	display.value = display.value + "6";
});

/* For digit seven*/
document.getElementById("seven").addEventListener("click",function(){
	display.value = display.value + "7";
});

/* For digit eight*/
document.getElementById("eight").addEventListener("click",function(){
	display.value = display.value + "8";
});

/* For digit nine*/
document.getElementById("nine").addEventListener("click",function(){
	display.value = display.value + "9";
});

/* For division*/
document.getElementById("division").addEventListener("click",function(){
	display.value = display.value + "/";
});

/* For multiplication*/
document.getElementById("multiplication").addEventListener("click",function(){
	display.value = display.value + "*";
});

/* For substraction*/
document.getElementById("substraction").addEventListener("click",function(){
	display.value = display.value + "-";
});

/* For addition*/
document.getElementById("addition").addEventListener("click",function(){
	display.value = display.value + "+";
});

/* For equal*/
document.getElementById("equal").addEventListener("click",calculate);

var result = 0;
/* Calculate the statement*/
function calculate(){
	var displayString = display.value;
	var action = '';
	var charVal = '';
	for (var i = 0; i< displayString.length; i++) {
		switch(displayString[i]){
			case '+':
				calculateVal(action,charVal);
				action = '+';
				charVal = '';
				break;
			case '-':
				calculateVal(action,charVal);
				action = '-';
				charVal = '';
				break;
			case '*':
				calculateVal(action,charVal);
				action = '*';
				charVal = '';
				break;
			case '/':
				calculateVal(action,charVal);
				action = '/';
				charVal = '';
				break;
			default:
				charVal += displayString[i];
				break;
		}
	};
	calculateVal(action,charVal);
	display.value = result;
	result = 0;
	
}
/* Calculating the result based on user's action*/
function calculateVal(action, charVal){
	switch(action){
		case '+':
			result += parseFloat(charVal);
			break;
		case '-':
			result -= parseFloat(charVal);
			break;
		case '*':
			result *= parseFloat(charVal);
			break;
		case '/':
			result /= parseFloat(charVal);
			break;
		default:
			result += parseFloat(charVal);
			break;
	}
}