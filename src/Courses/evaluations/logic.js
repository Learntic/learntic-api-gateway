
const axios = require('axios');

//-- Evaluations --//
const url_ms = "http://54.152.226.20:4000";

export async function getAllEvaluations() {
	let response = await axios.get(`${url_ms}/eva`)
	return response.data
}
export async function evaluationById(url_evaluation_ms){
	let response = await axios.get(url_evaluation_ms)
	return response.data
}
export async function ByStudent(url_evaluation_ms){
	let response = await axios.get(url_evaluation_ms)
	return response.data
}

export async function createEvaluation(eva){
	let response = await axios.post(`${url_ms}/eva`,eva)
	return response.data
}

export async function UpdateEvaluation(id, eva){
	let res = await axios.put(`${url_ms}/eva/${id}`,eva);
	return res.data;
}

export async function deleteEvaluation(url_ms) {
	let res = await axios.delete(url_ms);
	return res.data;
}

//------------------------------ QUIZ

export async function getAllQuiz() {
	let response = await axios.get(`${url_ms}/qz`)
	return response.data
}

export async function quizById(url_quiz_ms){
	let response = await axios.get(url_quiz_ms)
	return response.data
}

export async function createQuiz(qz){
	let response = await axios.post(`${url_ms}/qz`,qz)
	return response.data
}

export async function UpdateQuiz(id, qz){
	let res = await axios.put(`${url_ms}/qz/${id}`,qz);
	return res.data;
}

export async function deleteQuiz(url_quiz_ms) {
	let res = await axios.delete(url_quiz_ms);
	return res.data;
}
