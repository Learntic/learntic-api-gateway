import { signUp,signIn,token_auth } from './logic_authorization';
import {url, port, signUpPoint, signInPoint, authPoint} from './server';

const URL = `http://${url}:${port}`;

const resolvers = {
	Query:{
		auth:(_, {token}) => {
			let response = token_auth(`${URL}/${authPoint}`,token);
			return response;
		},
		signIn:(_,{account})=>{
			let response = signIn(`${URL}/${signInPoint}`, account)
			return response;
		}
	},
	Mutation: {
		signUp:(_,{account})=>{
      	let response= signUp(`${URL}/${signUpPoint}`,account)
      	return response;
    	}
	}
};

export default resolvers;
