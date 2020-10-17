import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint, user, course, coursenote } from './server';
import { feedbackByUser, feedbackByCourse, feedbackByID, getAllFeedback, createFeedback, deleteFeedback, updateFeedback, getFeedbackScore } from './logic';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allFeedback: (_) => {
			let response= getAllFeedback(`${URL}`);
      return response;
		},
		feedbackById: (_, {id}) =>{
			let response = feedbackByID(`${URL}/${id}`);
      return response;
		},
		feedbackByUser: (_, {id_usuario,token}) => {
			let response = feedbackByUser(`${URL}/${user}/${id_usuario}`,token);
      return response;
		},
    feedbackByCourse: (_, {id_curso}) => {
			let response = feedbackByCourse(`${URL}/${course}/${id_curso}`);
      return response;
		},
		feedbackScore: (_, {id_curso}) => {
			let response = getFeedbackScore(`${URL}/${coursenote}/${id_curso}`);
      return response;
		}
	},
	Mutation: {
		createFeedback: (_, { feedback,token }) => {
			let response = createFeedback(`${URL}`,feedback,token);
      return response;
		},
		updateFeedback: (_, { id, feedback,token }) => {
			let response = updateFeedback(`${URL}/${id}`,feedback,token);
      return response;
		},
		deleteFeedback: (_, { id,token }) => {
			let response = deleteFeedback(`${URL}/${id}`,token);
      return response;
		}
	}
};

export default resolvers;