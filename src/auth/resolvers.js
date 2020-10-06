import { signUp,signIn } from '../logic';


const resolvers = {
	Mutation: {
		signUp:(_,{account})=>{
            let response= signUp(account)
            return response
        },
        signIn:(_,{account})=>{
            let response = signIn(account)
            return response
        },
	}
};

export default resolvers;
