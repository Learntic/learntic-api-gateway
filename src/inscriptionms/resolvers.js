import { getInscriptionByUserId, postCreateInscription, putUpdateInscription, deleteDeleteInscription} from '../logic';
import { url, port, entryPoint, entryPoint_user } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const URL_user = `http://${url}:${port}${entryPoint_user}`;

const resolvers = {
	Query: {
		inscriptionByUserId: (_, { id }) =>{
			let response = getInscriptionByUserId(`${URL_user}?id_user=${id}`);
            console.log(URL_user);
            return response;
	},
    },
	Mutation: {
		createInscription: (_, { inscription }) =>{
            let response = postCreateInscription(`${URL}`, inscription);
            console.log(URL);
            return response;
        },
        updateInscription: (_, { inscription }) =>{
            let response = putUpdateInscription(`${URL}`, inscription);
            return response;
        },
        deleteInscription: (_, { id }) =>{
            let response = deleteDeleteInscription(`${URL}`, id);
            return response;
        }
	}
    
};

export default resolvers;