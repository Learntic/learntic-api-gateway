import { generalRequest, test} from './utilities';
import { url, port, friendsEntryPoint, usersEntryPoint } from './server';

const URL_Friends = `http://${url}:${port}/${friendsEntryPoint}`;
const URL_Users = `http://${url}:${port}/${usersEntryPoint}`;

const resolvers = {
	Query: {
		myFriends: (_, { id }) => 
			generalRequest(`${URL_Friends}/${id}`, 'GET'),
		friendsAchievements:  (_) => 
			test(_, 'GET'),
	},
	Mutation: {
		addFriend: (_, { data }) =>
			generalRequest(`${URL_Friends}`, 'POST', data),
		createUser: (_, { user }) =>
			generalRequest(`${URL_Users}`, 'POST', user),
		updateUser: (_, { id, user }) =>
			generalRequest(`${URL_Users}/${id}`, 'PUT', user),
	}
};

export default resolvers;
