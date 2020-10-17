
import authResolvers from './../../auth/resolvers'

const axios = require('axios');

import {generalRequest} from './../../utilities'
//-- Achievements --//

const url_achiviements_ms = "http://54.152.226.20:3002";

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
