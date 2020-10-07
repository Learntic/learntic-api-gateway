import { getEvasByID,createEva,updateEva, getQuizByID, createQuiz, updateQuiz} from '../logic';

const resolvers = {
	Query: {
		allEvaluacion: (_) => {
			let response= getAllEvaluacion(`${URL}`);
      return response;
		},
		EvaluacionById: (_, {id,token}) =>{
			let response = EvaluacionByID(`${URL}/${id}`);
      return response;
		},
//------------------------QUIZ
		allQuiz: (_) => {
			let response= getAllQuiz(`${URL}`);
      return response;
		},
		QuizById: (_, {id,token}) =>{
			let response = QuizByID(`${URL}/${id}`,token);
      return response;
		}	
	},


	Mutation: {
		createEvaluacion: (_, { Evaluacion }) => {
			let response = createEvaluacion(`${URL}`,Evaluacion);
      return response;
		},
		updateEvaluacion: (_, { id, feedback }) => {
			let response = updateEvaluacion(`${URL}/${id}`,Evaluacion);
      return response;
		},
		deleteEvaluacion: (_, { id }) => {
			let response = deleteEvaluacion(`${URL}/${id}`);
      return response;
		},

//--------------------------QUIZ

		createQuiz: (_, { feedback }) => {
			let response = createQuiz(`${URL}`,Quiz);
      return response;
		},
		updateQuiz: (_, { id, feedback }) => {
			let response = updateQuiz(`${URL}/${id}`,Quiz);
      return response;
		},
		deleteQuiz: (_, { id }) => {
			let response = deleteQuiz(`${URL}/${id}`);
      return response;
		}
	}
};