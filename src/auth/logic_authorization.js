const axios = require('axios');

export async function signUp(url_auth_ms, account) {
	let response = await axios.post(url_auth_ms, account)
	return response.data
}

export async function signIn(url_auth_ms, account) {
	let response = await axios.post(url_auth_ms, account)
	return response.data
}

export async function token_auth(url_auth_ms,token) {
	let response = await axios.post(url_auth_ms, token);
	return response.data.authorization;
}
