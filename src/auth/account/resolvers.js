import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Mutation: {
		createAccount: (_, { account }) =>
			generalRequest(`${URL}/`, 'POST', account),
	}
};

export default resolvers;
