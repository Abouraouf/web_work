const list = document.getElementById("list")
const add_button = document.getElementById("add")
const delete_button = document.getElementById("delete")

let array = JSON.parse(localStorage.getItem("list")) || [];
storage()

add_button.addEventListener("click", ()=>
{
	input = document.getElementById("input")
	li = document.createElement("li");
	if (input.value)
		{
			li.textContent = input.value;
			list.appendChild(li);
			array = JSON.parse(localStorage.getItem("list")) || [];
			array.push(input.value);
			localStorage.setItem("list", JSON.stringify(array));
			console.log(array)
			input.value = null;
		}
	});


function storage() {
	array.forEach(item => {
		const li = document.createElement("li");
		li.textContent = item;
		list.appendChild(li);
	});
}

delete_button.addEventListener("click", () =>
	{
		
	})