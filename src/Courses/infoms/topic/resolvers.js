import { getTopicsByIdCourse} from '../logic';
import { entryPoint } from './server';


const URL = `http://${process.env.COURSES_URL}:${process.env.COURSES_PORT}`;

const resolvers = {
	Query: {
	courseTopics: (_,{idCurso}) =>{
	    console.log(idCurso);
            let response = getTopicsByIdCourse(`${URL}/${entryPoint}`,idCurso);
            return response;
            
        },
        
    },
    Mutation: {
		
	}
			
	
};

export default resolvers;
