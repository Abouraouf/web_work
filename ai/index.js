fetch("https://pokeapi.co/api/v2/pokemon/ditto")
	.then(Response => Response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));

async function fetch_data()
{
	try
	{
		const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

	}catch(err){
		console.log(err);
	}

}