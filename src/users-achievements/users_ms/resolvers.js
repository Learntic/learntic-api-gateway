import { generalRequest, test} from './utilities';
import { url, port, friendsEntryPoint, usersEntryPoint } from './server';

const URL_Friends = `http://${url}:${port}/${friendsEntryPoint}`;
const URL_Users = `http://${url}:${port}/${usersEntryPoint}`;


let errorResponse =  {error: new Error('authentication failed - not valid token!')}
let iterableErrorResponse =  [{error: new Error('authentication failed - not valid token!')}]

const resolvers = {
	Query: {
		myFriends: (_, { id, token}) => 
			generalRequest(iterableErrorResponse, token, `${URL_Friends}/${id}`, 'GET'),
		getUser: (_, { id, token}) => 
			generalRequest(errorResponse, token, `${URL_Users}/${id}`, 'GET'),
		friendsAchievements:  (_) => 
			friendsAchievementsHandler(_, 'GET'),
	},
	Mutation: {
		addFriend: (_, { data, token}) =>
			generalRequest(errorResponse, token,`${URL_Friends}`, 'POST', data),
		createUser: (_, { user, token}) =>
			generalRequest(errorResponse, token, `${URL_Users}`, 'POST', user),
		updateUser: (_, { id, user, token}) =>
			generalRequest(errorResponse, token, `${URL_Users}/${id}`, 'PUT', user),
	}
};

export default resolvers;
