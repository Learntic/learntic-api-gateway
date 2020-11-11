import authResolvers from '../../auth/resolvers'

const axios = require('axios');

//-- Feedback --//

const url_feedback_ms = "http://34.235.31.196:3000";

export async function feedbackByUser(url_feedback_ms,token)
{
	let a = await authResolvers.Query.auth(null,{token: {token:token} });
	if (a){
		let res = await axios.get(url_feedback_ms);
		return res.data;
	}
	let feedback = {id:-1,id_usuario:"null",id_curso:-1,opinion:"null",nota:-1};
	return feedback;
}

export async function feedbackByCourse(url_feedback_ms)
{
	let res = await axios.get(url_feedback_ms);
	return res.data;
}

export async function feedbackByID(url_feedback_ms)
{
	let a = await authResolvers.Query.auth(null,{token: {token:token} });
	if (a){
		let res = await axios.get(url_feedback_ms);
		return res.data;
	}
	feedback = {id:-1,id_usuario:null,id_curso:null,opinion:null,nota:null};
	return feedback;
}

export async function getAllFeedback(url_feedback_ms)
{
	let res = await axios.get(url_feedback_ms);
	return res.data;
}

export async function getFeedbackScore(url_feedback_ms)
{
	let res = await axios.get(url_feedback_ms);
	return res.data;
}

export async function createFeedback(url_feedback_ms,body,token)
{
	let a = await authResolvers.Query.auth(null,{token: {token:token} });
	if (a){
		let res = await axios.post(url_feedback_ms,body);
		return res.data;
	}
	let feedback = {id:-1,id_usuario:"null",id_curso:-1,opinion:"null",nota:-1};
	return feedback;
}

export async function deleteFeedback(url_feedback_ms,token)
{
	let a = await authResolvers.Query.auth(null,{token: {token:token} });
	if (a){
		let res = await axios.delete(url_feedback_ms);
		return res.data;
	}
	return "error";
}

export async function updateFeedback(url_feedback_ms, body,token)
{
	let a = await authResolvers.Query.auth(null,{token: {token:token} });
	if (a){
		let res = await axios.put(url_feedback_ms, body);
		return res.data;
	}
	let feedback = {id:-1,id_usuario:"null",id_curso:-1,opinion:"null",nota:-1};
	return feedback;
}
