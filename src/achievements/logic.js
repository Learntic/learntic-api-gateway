
import authResolvers from './../auth/resolvers'

const axios = require('axios');

import {generalRequest} from './../utilities'
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
//-- Achievements --//

const url_achiviements_ms = "http://3.217.138.233:3000";

export async function getAllUsers(url_achievement_ms,token){
	let a = await authResolvers.Query.auth(null,{token: {token:token} });
	if (a)
		return generalRequest(url_achievement_ms, '');
	return [{username:"-1" , shared :false,achievements_id: "-1" }];
}
export async function getAllAchievements(url_achievement_ms,token){
	let a = await authResolvers.Query.auth(null,{token: {token:token} });
	if (a)
		return generalRequest(url_achievement_ms, '');
	return [{name:"-1" , description: "-1" }];
}
