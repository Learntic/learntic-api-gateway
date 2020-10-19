
import authResolvers from '../../auth/resolvers'
import usersResolvers from '../users_ms/resolvers'
import achievementsResolvers from '../achievements/user_achievements/resolvers'

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

export async function getFriendsAchievements(id,token){
	let friends = await usersResolvers.Query.myFriends(null, {id: id, token: token})
	friends = friends.map(user => {return user.username})

	let response = await achievementsResolvers.Query.GetAchievementsByUsernames(null, {names: friends})
	return response;
}
