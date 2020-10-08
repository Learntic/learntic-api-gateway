import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint, user, course } from './server';
import { feedbackByUser, feedbackByCourse, feedbackByID, getAllFeedback, createFeedback, deleteFeedback, updateFeedback } from './logic';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allFeedback: (_) => {
			let response= getAllFeedback(`${URL}`);
      return response;
		},
		feedbackById: (_, {id,token}) =>{
			let response = feedbackByID(`${URL}/${id}`,token);
      return response;
		},
		feedbackByUser: (_, {id_usuario,token}) => {
			let response = feedbackByUser(`${URL}/${user}/${id_usuario}`,token);
      return response;
		},
    feedbackByCourse: (_, {id_curso,token}) => {
			let response = feedbackByCourse(`${URL}/${course}/${id_curso}`,token);
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
