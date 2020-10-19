

import { generalRequest, addParams } from '../../../utilities';
import { url, port, entryPointAllUsers,entryPointDeleteUserAchievement,entryPointGetAchievementsByUsernames,entryPointDeleteAchievement, entryPointNewUserAchievement,entryPointNewAchievement,entryPointAllAchievements} from './server';

import { getAllUsers, getAllAchievements, getFriendsAchievements} from '../logic';

const URL = `http://${url}:${port}`;

const resolvers = {
	Query: {
		allUsers:(_, {token}) =>{
 			let response = getAllUsers(`${URL}/${entryPointAllUsers}`, token);
			return response;
		},
		allAchievements:(_, {token}) =>{
			let response = getAllAchievements(`${URL}/${entryPointAllAchievements}}`, token);
			return response;
		},
		friendsAchievements:(_, {id, token}) =>{
			let response = getFriendsAchievements(id, token);
		   	return response;
	   	},
		GetAchievementsByUsernames:(_, {names}) =>
			generalRequest(addParams(`${URL}/${entryPointGetAchievementsByUsernames}`,{"names[]": names}), 'GET'),
	},
	Mutation: {
		createUserAchievements: (_,{user_achievement2} ) =>
			generalRequest(`${URL}/${entryPointNewUserAchievement}`, 'POST', user_achievement2),
		createAchievement: (_,{achievement2} ) =>
			generalRequest(`${URL}/${entryPointNewAchievement}`, 'POST', achievement2),
		deleteAchievement: (_, { id }) =>
			generalRequest(`${URL}/${entryPointDeleteAchievement}/${id}`, 'DELETE'),
		deleteUserAchievement: (_, { id }) =>
			generalRequest(`${URL}/${entryPointDeleteUserAchievement}/${id}`, 'DELETE'),
		createCategory: (_, { category }) =>
			generalRequest(`${URL}/`, 'POST', category),
		updateCategory: (_, { id, category }) =>
			generalRequest(`${URL}/${id}`, 'PUT', category),
		deleteCategory: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
