import { getAllCourses,searchCourseByText} from '../../logic';
import { url, port, entryPoint, user, course,entryPointSearchCourse } from './server';


const URL = `http://${url}:${port}`;

const resolvers = {
	Query: {
		allCourses: (_) =>{
            let response = getAllCourses(`${URL}/${entryPoint}`);
            return response;
            
        },
        searchCourse:(_,{curso})=>{
            let response = searchCourseByText(`${URL}/${entryPointSearchCourse}`,curso);
            return response;
            
        },
        
    },
    Mutation: {
		
	}
			
	
};

export default resolvers;
