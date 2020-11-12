import authResolvers from '../../auth/resolvers'
import topicResolver from './topic/resolvers'

const axios = require('axios');


//-- Infoms --/

export async function getAllCourses(url_info_ms){
	let res = await axios.get(url_info_ms);
	return res.data;
}

export async function searchCourseByText(url_info_ms,cadena){
	let res = await axios.post(url_info_ms, cadena);
	return res.data;
}

export async function getTopicsByIdCourse(url_info_ms, entero){
	let res = await axios.post(url_info_ms, entero);
	return res.data;
}

export async function getCourse(url_info_ms, course_id){
	let res = await axios.post(url_info_ms, course_id);
	return res.data;
}

export async function getCoursesId(url_info_ms){
	let res = await axios.get(url_info_ms);
	return res.data;
}

//-- Inscriptionms --//

export async function getInscriptionByUserId(url_inscription_ms){
	let res = await axios.get(url_inscription_ms);
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
