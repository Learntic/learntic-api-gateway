import { generalRequest, notMyFriends} from './utilities';
import { friendsEntryPoint, usersEntryPoint } from './server';

const URL_Friends = `http://${process.env.USERS_URL}:${process.env.USERS_PORT}/${friendsEntryPoint}`;
const URL_Users = `http://${process.env.USERS_URL}:${process.env.USERS_PORT}/${usersEntryPoint}`;

let iterableUserErrorResponse =  [{error: new Error('authentication failed - not valid token!')}]
let userErrorResponse =  {error: new Error('authentication failed - not valid token!')}

const resolvers = {
	Query: {
		myFriends: (_, { id, token }) => 
			generalRequest(iterableUserErrorResponse, token, `${URL_Friends}/${id}`, 'GET'),
		notMyFriends: (_, { id, token}) => 
			notMyFriends(iterableUserErrorResponse, id, token),
		getUser: (_, { id, token }) => 
			generalRequest(iterableUserErrorResponse, token, `${URL_Users}/${id}`, 'GET'),
		getAllUsers: (_, { token }) => 
			generalRequest(iterableUserErrorResponse, token, `${URL_Users}`, 'GET'),
	},
	Mutation: {
		addFriend: (_, { data, token}) =>
			generalRequest(userErrorResponse, token,`${URL_Friends}`, 'POST', data),
		updateUser: (_, { id, user, token}) =>
			generalRequest(userErrorResponse, token, `${URL_Users}/${id}`, 'PUT', user),
	}
};

export default resolvers;
