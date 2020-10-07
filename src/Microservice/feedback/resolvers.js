import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint, user, course } from './server';
import { feedbackByUser, feedbackByCourse, feedbackByID, getAllFeedback, createFeedback, deleteFeedback, updateFeedback } from '../../logic';

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
		feedbackByUser: (_, {id_usuario}) => {
			let response = feedbackByUser(`${URL}/${user}/${id_usuario}`);
      return response;
		},
    feedbackByCourse: (_, {id_curso}) => {
			let response = feedbackByCourse(`${URL}/${course}/${id_curso}`);
      return response;
		}
	},
	Mutation: {
		createFeedback: (_, { feedback }) => {
			let response = createFeedback(`${URL}`,feedback);
      return response;
		},
		updateFeedback: (_, { id, feedback }) => {
			let response = updateFeedback(`${URL}/${id}`,feedback);
      return response;
		},
		deleteFeedback: (_, { id }) => {
			let response = deleteFeedback(`${URL}/${id}`);
      return response;
		}
	}
};

export default resolvers;
