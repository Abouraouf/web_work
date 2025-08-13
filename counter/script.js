
function increment()
{
	let mahdi = document.getElementById("counter").innerText;
	if (mahdi >= 0 && mahdi < 1000)
		document.getElementById("counter").innerText++;
	else
		reset()
}

function decriment()
{
	let mahdi = document.getElementById("counter").innerText;
	if (mahdi > 0 && mahdi < 1000)
		document.getElementById("counter").innerText--;
	else
		reset()
}
function reset()
{
	document.getElementById("counter").innerText = 0;
}

function save()
{
	let mahdi = document.getElementById("counter").innerText;
	document.getElementById("counter") += mahdi;
}