import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	categoryMutations,
	categoryQueries,
	categoryTypeDef
} from './achievements/user_achievements/typeDefs';
import {
	accountMutations,
	accountQueries,
	accountTypeDef
} from './auth/typeDefs';

import {
	feedbackMutations,
	feedbackQueries,
	feedbackTypeDef
} from './Microservice/feedback/typeDefs';

import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './users-achievements/users_ms/typeDefs';

import accountResolvers from './auth/resolvers';
import categoryResolvers from './achievements/user_achievements/resolvers';

import usersResolvers from './users-achievements/users_ms/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		accountTypeDef,
		feedbackTypeDef,
    categoryTypeDef,
		usersTypeDef
	],
	[
		accountQueries,
		feedbackQueries,
    categoryQueries,
		usersQueries
	],
	[
		accountMutations,
		feedbackMutations,
    categoryMutations,
		usersMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		accountResolvers,
		feedbackResolvers,
		usersResolvers
		categoryResolvers
	)
});
