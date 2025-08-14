const add_button = document.getElementById("add")
const delete_button = document.getElementById("delete")
const clear_button = document.getElementById("clear")
const list = document.getElementById("list")
let array = JSON.parse(localStorage.getItem("array")) || []

const prev = window.localStorage

if (prev){
	const arr = JSON.parse(prev.array)
	console.log(arr)
	arr.map((e) => {
		const elem = document.createElement("li")
		elem.textContent = e
		list.appendChild(elem)
	})
}

add_button.addEventListener("click", () =>
	{
		console.log(array);
		const input = document.getElementById("input")
		const li = document.createElement("li")
		if (input.value)
			{
				array.push(input.value)
				localStorage.setItem("array", JSON.stringify(array));
				li.textContent = input.value;
				list.appendChild(li);
				input.value = "";
			}
	})

delete_button.addEventListener("click", () =>{
	const items = document.querySelectorAll("ul li");
	array = array.filter(item => item !== input.value)
	localStorage.setItem("array", JSON.stringify(array));
	items.forEach(li => {
    	if (li.textContent == input.value)
			li.remove()
	});
})

clear_button.addEventListener("click", () => {
	const items = document.querySelectorAll("ul li");
	items.forEach(li => {
			li.remove()
	});
	array = [];
	localStorage.setItem("array", JSON.stringify(array));
})