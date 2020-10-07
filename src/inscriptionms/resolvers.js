import { getInscriptionByUserId} from '../logic';
import { url, port, entryPoint, entryPoint_user } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const URL_user = `http://${url}:${port}/${entryPoint_user}`;

const resolvers = {
	Query: {
		inscriptionByUserId: (_, { id }) =>{
			let response = getInscriptionByUserId(`${URL_user}?id_user=${id}`);
            return response;
	},
    },
	Mutation: {
		/*#createInscription: (_, { inscription }) =>
		#	generalRequest(`${URL}/`, 'POST', inscription),
		#updateInscription: (_, { id, inscription }) =>
		#	generalRequest(`${URL}/${id}`, 'PUT', inscription),
		#deleteInscription: (_, { id }) =>
		#	generalRequest(`${URL}/${id}`, 'DELETE')*/
	}
    
};

export default resolvers;