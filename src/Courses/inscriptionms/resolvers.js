import { coursesByUserId, postCreateInscription, putUpdateInscription, deleteDeleteInscription, getInscriptionByUserIdAndCourseId, coursesByNotUserId} from './logic';
import { entryPoint, entryPoint_user } from './server';

const URL = `http://${process.env.INSCRIPTION_URL}:${process.env.INSCRIPTION_PORT}${entryPoint}`;
const URL_user = `http://${process.env.INSCRIPTION_URL}:${process.env.INSCRIPTION_PORT}${entryPoint_user}`;

const resolvers = {
	Query: {
		coursesByUserId: (_, { id }) =>{
            console.log("Entramos al query correcto");
			let response = coursesByUserId(`${URL_user}?id_usuario=${id}`);
            
            return response;
	},
        inscriptionByUserIdAndCourseId: (_, { user_id, course_id }) =>{
            
			let response = getInscriptionByUserIdAndCourseId(`${URL_user}?id_user=${user_id}&course_id${course_id}`);
            console.log(URL_user);
            return response;
    },
        coursesByNotUserId: (_, { id }) =>{
            let response = coursesByNotUserId(`${URL_user}?id_usuario=${id}`);
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