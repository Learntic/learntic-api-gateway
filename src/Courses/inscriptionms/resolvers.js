import { getInscriptionByUserId, postCreateInscription, putUpdateInscription, deleteDeleteInscription, getInscriptionByUserIdAndCourseId} from './logic';
import { url, port, entryPoint, entryPoint_user } from './server';

const URL = `http://${url}:${port}${entryPoint}`;
const URL_user = `http://${url}:${port}${entryPoint_user}`;

const resolvers = {
	Query: {
		inscriptionByUserId: (_, { id }) =>{
            console.log("Entramos al query correcto");
			let response = getInscriptionByUserId(`${URL_user}?id_user=${id}`);
            
            return response;
	},
        inscriptionByUserIdAndCourseId: (_, { user_id, course_id }) =>{
            
			let response = getInscriptionByUserIdAndCourseId(`${URL_user}?id_user=${user_id}&course_id${course_id}`);
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
        updateInscription: (_, { id, inscription }) =>{
            
            let response = putUpdateInscription(`${URL}${id}`, inscription);
            return response;
        },
        deleteInscription: (_, { id }) =>{
            
            let response = deleteDeleteInscription(`${URL}${id}`);
            console.log(URL+id);
            return response;
        }
	},
    

};

export default resolvers;