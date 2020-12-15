import { getAllCourses,searchCourseByText, getCourse, getCoursesId} from '../logic';
import { entryPoint, entryPointSearchCourse, entryPointSearchCourseComplete, entryPointSearchCoursesIds } from './server';


const URL = `http://${process.env.COURSES_URL}:${process.env.COURSES_PORT}`;

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
        getCoursesId:(_)=>{
            let response = getCoursesId(`${URL}/${entryPointSearchCoursesIds}`);
            return response;
        },
        
    },
    Mutation: {
		getCourse:(_,{id})=>{
            let response = getCourse(`${URL}/${entryPointSearchCourseComplete}`,id);
            return response;
        },
	}
			
	
};

export default resolvers;
