let mathFunction = [];
let input = [];



// MATH FUNCTIONS
function leftPare(){

}

function rightPare(){

}

function remainder(num1, num2){
return num1%num2;
}

function clear(){
	input = [];
	mathFunction = [];
	updateDisplay("0");

}

function divide (num1, num2, numX) {
  let result = num1;
  for(let i = 1; i < arguments.length; i++) {
    result /= arguments[i];
  }
  return result;  
}

function multiply (num1, num2, numX) {
  let result = num1;
  for(let i = 1; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;  
}

function subtract (numStart, subNum1, subNumX) {
  let result = arguments[0];
  for(let i = 1; i < arguments.length; i++) {
    result -= arguments[i];
  }
  return result;
}

function add (num1, num2, numX) {
  let result = 0;
  for(let i = 0; i < arguments.length; i++){
    result += arguments[i];
  }
  return result;
}

// LAYOUT FUNCTIONS //

function createElement(num, type, newClass, newId, content){
	const calcContainer = document.querySelector("#calcContainer")
	
	for(let i=0; i<num; i++){
	const newDiv = document.createElement(type);	
		if (newClass){
			newDiv.classList.add(newClass);
		}
		if (content){newDiv.textContent = content;}
		else {newDiv.textContent = i;
		}
		if (newId) {
			if(num>1){newDiv.setAttribute("id", newId + i);}
			else {newDiv.setAttribute("id", newId)}
		}
	calcContainer.appendChild(newDiv);	
	}

}

function addMathListeners(event1, event2, elToListen){
	let elArray = document.querySelectorAll(elToListen);
	for (let i=0; i< elArray.length; i++) {
		
		elArray[i].addEventListener(event1, () => {
			
			elArray[i].classList.add("push");
			switch(elArray[i].textContent) {
				case "(" :
					mathFunction[mathFunction.length] = leftPare;
					break;
				case ")" :
					mathFunction[mathFunction.length] = rightPare;
					break;
				case "%" :
					mathFunction[mathFunction.length] = remainder;
					break;
				case "AC" :
					mathFunction[mathFunction.length] = clear(); 
					break;
				case "/" :
					mathFunction[mathFunction.length] = divide;
					break;
				case "*" :
					mathFunction[mathFunction.length] = multiply;
					break; 
				case "+" :
					mathFunction[mathFunction.length] = add;
					break; 
				case "-" :
					mathFunction[mathFunction.length] = subtract;
					break;
			}
			//previousInput = input;
			//previousMathFunction = mathFunction;

			//input = "";
			//console.log(mathFunction);
			//console.log(previousMathFunction);

		});

		elArray[i].addEventListener(event2, () => {
			
			elArray[i].classList.remove("push");

		});		
	}	
}

function addEqualsListener() {
	const equalsBox = document.querySelector(".equalsBox");
	equalsBox.addEventListener("mousedown", () => {	
		equalsBox.classList.add("push");
		computeAnswer();	
				  
		});

	equalsBox.addEventListener("mouseup", () => {
		equalsBox.classList.remove("push");

		});	
			
}

function addNumberListeners(event1, event2, elToListen){
	let elArray = document.querySelectorAll(elToListen);
	for (let i=0; i< elArray.length; i++) {
		
		elArray[i].addEventListener(event1, () => {
			
			elArray[i].classList.add("push");
			input[input.length] = elArray[i].textContent;
			updateDisplay(input[input.length-1]);
		});

		elArray[i].addEventListener(event2, () => {
			
			elArray[i].classList.remove("push");
		});		
	}	
}

function computeAnswer(){
	let intermediateInput = [input[0]];
	let intermediateMathFunction = [];
	for (i=0; i<mathFunction.length; i++) {
		if(mathFunction[i] == multiply) {
			intermediateInput[intermediateInput.length-1] *=input[i+1];
		} else if(mathFunction[i] == divide) {
			intermediateInput[intermediateInput.length-1] /=input[i+1]
		} else {
			intermediateInput[intermediateInput.length] = input[i+1];
			intermediateMathFunction[intermediateMathFunction.length] = mathFunction[i];

		}
	}
console.log(intermediateInput);
console.log(intermediateMathFunction);


	let j = 1;
	let output = [intermediateInput[0]];
		while (j<intermediateInput.length){
			output = intermediateMathFunction[j-1](Number(output), Number(intermediateInput[j]));
			j++;
		}
			//console.log("=")
			updateDisplay(output);
	//if mathFunction == "multiply" || mathFunction ==
	
	//input = output;
}

function updateDisplay(string){
	const displayBox = document.querySelector(".displayBox");
	displayBox.textContent = string;
}

// Create Divs //
createElement(1, "div", "displayBox", "displayBox", "HELLO" );
createElement(1, "div", "solarBox", "solarBox"," " );
createElement(10, "div", "numBox", "numBox");
createElement(1, "div", "functionBox", "divideBox", "/");
createElement(1, "div", "functionBox", "leftPareBox", "(");
createElement(1, "div", "functionBox", "rightPareBox", ")");
createElement(1, "div", "functionBox", "percentBox", "%");
createElement(1, "div", "functionBox", "clearBox", "AC");
createElement(1, "div", "functionBox", "multiplyBox", "*");
createElement(1, "div", "functionBox", "plusBox", "+");
createElement(1, "div", "functionBox", "minusBox", "-");
createElement(1, "div", "equalsBox", "equalsBox", "=");
createElement(1, "div", "functionBox", "decimalBox", ".");

// Create Listeners //
addMathListeners("mousedown", "mouseup", ".functionBox");
addNumberListeners("mousedown", "mouseup", ".numBox");
addEqualsListener();


// RUN //

//updateDisplay(input);


