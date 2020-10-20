const axios = require('axios');
import infoResolvers from '../infoms/course/resolvers'

//-- Inscriptionms --//

export async function coursesByUserId(url_inscription_ms){
	let res = await axios.get(url_inscription_ms);
	var cursos = [];
	for(var y in res.data){
		var id = res.data[y].id_curso;
		let res2 = await infoResolvers.Mutation.getCourse(null, {id:{entero:id}});
		cursos[y] = res2;
	}
	
	return cursos;
}

export async function coursesByNotUserId(url_inscription_ms){
	let res = await axios.get(url_inscription_ms);
	var cursos = [];
	let res3 = await infoResolvers.Query.getCoursesId(null);
	console.log(res3[0]);
	for(var x in res3){
		console.log("for1");
		if(res.indexOf(res3[x]) != -1)
			res3.splice(x,1);
	}
	console.log(res3)
	for(var y in res3){
		var id = res3[y];
		console.log(id);
		let res2 = await infoResolvers.Mutation.getCourse(null, {id:{entero:id}});
		cursos[y] = res2;
	}
	
	return cursos;
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
