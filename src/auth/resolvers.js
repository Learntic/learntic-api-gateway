import { signUp,signIn,token_auth } from './logic';


const resolvers = {
	Query:{
		auth:(_, {token}) => {
			let response = token_auth(token);
			return response;
		},
		signIn:(_,{account})=>{
			let response = signIn(account)
			return response
		}
	},
	Mutation: {
		signUp:(_,{account})=>{
      let response= signUp(account)
      return response
    }
	}
};

export default resolvers;
