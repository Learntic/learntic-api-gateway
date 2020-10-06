const axios = require('axios');

const url_auth_ms = "http://18.232.11.157:3001";

export async function signUp(account) {
	let response = await axios.post(url_auth_ms + "/signUp", account)
	return response.data
}

export async function signIn(account) {
	let response = await axios.post(url_auth_ms + "/signIn", account)
	return response.data
}

//-- Evaluations --//

const url_evaluacion_ms = "http://18.210.222.231:8080";


export async function getEvasByID(id) {
	let response = await axios.post(url_evaluacion_ms+"/")
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
	let response = await axios.post(url_evaluacion_ms+"/")
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
