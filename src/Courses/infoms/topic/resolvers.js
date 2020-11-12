import { getTopicsByIdCourse} from '../logic';
import { url, port, entryPoint } from './server';


const URL = `http://${url}:${port}`;

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
