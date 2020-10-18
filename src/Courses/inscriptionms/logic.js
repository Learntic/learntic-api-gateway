const axios = require('axios');
import infoResolvers from '../infoms/course/resolvers'

//-- Inscriptionms --//

export async function getInscriptionByUserId(url_inscription_ms){
	let res = await axios.get(url_inscription_ms);
	console.log(res.data);
	var j = JSON.stringify(res.data)
	for(var y in j){
		console.log(y);
	}
	/*let a = JSON.stringify(res.data)
	var obj = JSON.parse(a);
	*/
	return res.data;
}

export async function postCreateInscription(url_inscription_ms, inscription){
	let res = await axios.post(url_inscription_ms, inscription);
	return res.data;
}

export async function putUpdateInscription(url_inscription_ms, id, inscription){
	let res = await axios.put(url_inscription_ms, id, inscription);
	return res.data;
}

export async function deleteDeleteInscription(url_inscription_ms, id){
	let res = await axios.delete(url_inscription_ms, id);
	return res.data;
}

export async function getInscriptionByUserIdAndCourseId(url_inscription_ms, user_id, course_id){
    
	let res = await axios.get(url_inscription_ms, user_id, course_id);
	return res.data;
}
