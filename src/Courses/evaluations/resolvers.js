import { getAllEvaluations,getAllQuiz,evaluationById,quizById,createEvaluation,createQuiz,deleteEvaluation,deleteQuiz, UpdateEvaluation, UpdateQuiz} from './logic';
import { url, port, evaluation, quiz } from './server';

const URL = `http://${url}:${port}`

const resolvers = {
	Query: {
		allEvaluation: (_) => {
			let response= getAllEvaluations(`${URL}/${evaluation}`);
      		return response;
		},
		evaluationById: (_, {id}) =>{
			let response = evaluationById(`${URL}/${evaluation}/${id}`);
	  		return response;
		},
	//--------------------------------------------
		allQuiz: (_) => {
			let response= getAllQuiz(`${URL}/${quiz}`);
      		return response;
		},
		quizById: (_, {id}) =>{
			let response = quizById(`${URL}/${quiz}/${id}`);
	  		return response;},		
	},
	Mutation: {
		createEvaluation: (_, {eva}) => {
			let response = createEvaluation(eva);
      		return response;
		},		
		deleteEvaluation: (_, { id }) =>{
            let response = deleteEvaluation(`${URL}/${evaluation}/${id}`);
            return response;
		},
		updateEvaluation: (_, { id, eva }) =>{
            let response = UpdateEvaluation(id,eva);
            return response;
		},
		
		//--------------------------------------------
		createQuiz: (_, {qz}) => {
			let response = createQuiz(qz);
      		return response;
		},
		deleteQuiz: (_, { id }) =>{
            let response = deleteQuiz(`${URL}/${quiz}/${id}`);
            return response;
		},			
		updateQuiz: (_, { id, qz }) =>{
            let response = UpdateQuiz(id,qz);
            return response;
        }
	},
	
};
export default resolvers;