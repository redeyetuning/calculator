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

// Create Divs//
createElement(1, "div", "displayBox", "displayBox", "0" );
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