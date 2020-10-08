import { getEvas,createEva,updateEva, getQuiz, createQuiz, updateQuiz} from './logic_evaluacion';

const resolvers = {
	Query: {
		allEvaluacion: (_) => {
			let response= getEvas();
      return response;
		},	
//------------------------QUIZ
		allQuiz: (_) => {
			let response= getQuiz();
      return response;
		}		
	},
	Mutation: {
		createEvaluacion: (_, { Evaluacion }) => {
			let response = createEva(`${URL}`,Evaluacion);
      return response;
		},
		updateEvaluacion: (_, { id,Evaluacion }) => {
			let response = updateEva(`${URL}/${id}`,Evaluacion);
      return response;
		},
		deleteEvaluacion: (_, { id }) => {
			let response = deleteEvaluacion(`${URL}/${id}`);
      return response;
		},
//--------------------------QUIZ
		createQuiz: (_, { Quiz }) => {
			let response = createQuiz(`${URL}`,Quiz);
      return response;
		},
		updateQuiz: (_, { id, Quiz }) => {
			let response = updateQuiz(`${URL}/${id}`,Quiz);
      return response;
		},
		deleteQuiz: (_, {id}) => {
			let response = deleteQuiz(`${URL}/${id}`);
      return response;
		}
	}
};
export default resolvers;