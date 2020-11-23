const axios = require('axios');

export async function getAllGuests(url_info_ms){
	var newData = [];
	let res = await axios.get(url_info_ms);
	for (var i = 0; i<res.data.length; i++){
		newData[i] = {id: res.data[i].id, nombre: res.data[i].name, apellido: res.data[i].lastname}
	}
	console.log("Esto es newData", newData);
	return newData;
}
