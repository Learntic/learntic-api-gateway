import authResolvers from '../../auth/resolvers'
import topicResolver from './topic/resolvers'
import feedbackResolvers from '../feedback/resolvers'

const axios = require('axios');

//-- Authorization --//

const url_auth_ms = "http://18.232.11.157:3001";


export async function signUp(account) {
	let response = await axios.post(url_auth_ms + "/signUp", account)
	return response.data
}

export async function signIn(account) {
	let response = await axios.post(url_auth_ms + "/signIn", account)
	return response.data
}

export async function token_auth(token) {
	let response = await axios.post(url_auth_ms + "/auth", token);
	return response.data.authorization;
}



//-- Feedback --//

const url_feedback_ms = "http://3.210.254.47:";


export async function feedbackByUser(url_feedback_ms){
	let res = await axios.get(url_feedback_ms);
	return res.data;
}

export async function feedbackByCourse(url_feedback_ms){
	let res = await axios.get(url_feedback_ms);
	return res.data;
}

export async function feedbackByID(url_feedback_ms,token){
	let a = await authResolvers.Query.auth(null,{token: {token:token} });
	if (a){
		let res = await axios.get(url_feedback_ms);
		return res.data;
	}
	feedback = {id:-1,id_usuario:null,id_curso:null,opinion:null,nota:null};
	return feedback;
}

export async function getAllFeedback(url_feedback_ms){
	let res = await axios.get(url_feedback_ms);
	return res.data;
}

export async function createFeedback(url_feedback_ms,body) {
	let res = await axios.post(url_feedback_ms,body);
	return res.data;
}

export async function deleteFeedback(url_feedback_ms) {
	let res = await axios.delete(url_feedback_ms);
	return res.data;
}

export async function updateFeedback(url_feedback_ms, body) {
	let res = await axios.put(url_feedback_ms, body);
	return res.data;
}

//-- Infoms --//
const url_info_ms_base = "http://18.209.220.131:";


export async function getAllCourses(url_info_ms){
	let res = await axios.get(url_info_ms);
	console.log(res.data);
	console.log(res.data[0]);
	for(var y in res.data){
		var id = res.data[y].id_curso;
		console.log(id);
		let puntaje = await feedbackResolvers.Query.feedbackScore(null, {id_curso:id});
		console.log(puntaje);
		res[y].course_score = puntaje;
	}
	return res.data;
}

export async function searchCourseByText(url_info_ms,cadena){
	let res = await axios.post(url_info_ms, cadena);
	return res.data;
}

export async function getTopicsByIdCourse(url_info_ms,entero){
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
