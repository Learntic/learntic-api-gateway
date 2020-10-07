import { generalRequest, test} from './utilities';
import { url, port, friendsEntryPoint, usersEntryPoint } from './server';

const URL_Friends = `http://${url}:${port}/${friendsEntryPoint}`;
const URL_Users = `http://${url}:${port}/${usersEntryPoint}`;


let iterableUserErrorResponse =  [{error: new Error('authentication failed - not valid token!')}]
let userErrorResponse =  {error: new Error('authentication failed - not valid token!')}

const resolvers = {
	Query: {
		myFriends: (_, { id, token}) => 
			generalRequest(iterableUserErrorResponse, token, `${URL_Friends}/${id}`, 'GET'),
		friendsAchievements:  (_) => 
			friendsAchievementsHandler(_, 'GET'),
	},
	Mutation: {
		addFriend: (_, { data, token}) =>
			generalRequest(userErrorResponse, token,`${URL_Friends}`, 'POST', data),
		createUser: (_, { user, token}) =>
			generalRequest(userErrorResponse, token, `${URL_Users}`, 'POST', user),
		updateUser: (_, { id, user, token}) =>
			generalRequest(userErrorResponse, token, `${URL_Users}/${id}`, 'PUT', user),
	}
};

export default resolvers;
