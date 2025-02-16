export default async function GetCards (texto) {
	try {
		const response = await fetch(
			"https://api.scryfall.com/cards/search?q=" + texto
		);
		if (response.ok) {
			const data = await response.json();
			console.log(data.data)

			return(await data.data);
		} else {
			console.log("Error en response")
		}
	} catch (error) {
		console.log(error)
	}
	
}