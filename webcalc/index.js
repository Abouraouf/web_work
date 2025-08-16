const input = document.getElementById("in");
const buttons = document.querySelectorAll(".buttons button")

buttons.forEach(button =>
	{
		const value = button.textContent;
		button.addEventListener("click", ()=>{
			if (value == "=")
				try{
					input.value =  eval(input.value);
					}
				catch{
					input.value = "error"
				}
			else if (value == "C")
				input.value = ""
			else 
				input.value += value
		});
	});