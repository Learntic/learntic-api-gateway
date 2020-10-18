import { getAllCourses,searchCourseByText, getCourseName} from '../logic';
import { url, port, entryPoint, entryPointSearchCourse, entryPointSearchCourseName } from './server';


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
        getCourseName:(_,{id})=>{
            let response = getCourseName(`${URL}/${entryPointSearchCourseName}`,id);
            return response;
            
        },
        
    },
    Mutation: {
		
	}
			
	
};

export default resolvers;
