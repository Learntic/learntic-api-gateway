const axios = require('axios');

//-- Evaluations --//

const url_evaluacion_ms = "http://54.152.226.20:3001:4000";

export async function getEvas() {
	let response = await axios.get(url_evaluacion_ms+"/evaluaciones/");
	return response.data
}

export async function createEva(body) {
	let response = await axios.post(url_evaluacion_ms+"/evaluaciones/")
	return response.data
}
export async function updateEva(body) {
	let response = await axios.post(url_evaluacion_ms+"/evaluaciones/")
	return response.data
}

export async function getQuiz() {
	let response = await axios.get(url_evaluacion_ms+"/quiz")
	return response.data
}

export async function createQuiz(body) {
	let response = await axios.post(url_evaluacion_ms+"/quiz/")
	return response.data
}

export async function updateQuiz(body) {
	let response = await axios.post(url_evaluacion_ms+"/quiz/")
	return response.data
}