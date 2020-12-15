import { getTopicsByIdCourse} from '../logic';
import { entryPoint } from './server';


const URL = `http://${process.env.TOPICS_URL}:${process.env.TOPICS_PORT}`;

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
