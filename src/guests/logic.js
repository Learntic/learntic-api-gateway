const axios = require('axios');

export async function getAllGuests(url_info_ms){
	var newData = [];
	let res = await axios.get(url_info_ms);
	for (i = 0; i<res.data.lenght(); i++){
		newData[i] = {id: res.data[i].id, nombre: res.data[i].nombre, apellido: res.data[i].apellido}
	}
	return newData;
}