import authResolvers from './auth/resolvers'

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

//-- Evaluations --//

const url_evaluacion_ms = "http://18.210.222.231:8080";


export async function getEvasByID(id) {
	let response = await axios.post(url_evaluacion_ms+"/"+id)
	return response.data
}

export async function createEva(body) {
	let response = await axios.post(url_evaluacion_ms+"/")
	return response.data
}
export async function updateEva(body) {
	let response = await axios.post(url_evaluacion_ms+"/")
	return response.data
}

export async function getQuizByID(id) {
	let response = await axios.post(url_evaluacion_ms+"/"+id)
	return response.data
}

export async function createQuiz(body) {
	let response = await axios.post(url_evaluacion_ms+"/")
	return response.data
}

export async function updateQuiz(body) {
	let response = await axios.post(url_evaluacion_ms+"/")
	return response.data
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
