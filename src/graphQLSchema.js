import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	accountMutations,
	accountQueries,
	accountTypeDef
} from './auth/typeDefs';

import {
	feedbackMutations,
	feedbackQueries,
	feedbackTypeDef
} from './Courses/feedback/typeDefs';

import {
	achievementsMutations,
	achievementsQueries,
	achievementsTypeDef
} from './Users-Achievements/achievements/user_achievements/typeDefs';

import accountResolvers from './auth/resolvers';

import feedbackResolvers from './Courses/feedback/resolvers';


import achievementsResolvers from './Users-Achievements/achievements/user_achievements/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		accountTypeDef,
		feedbackTypeDef,
		achievementsTypeDef
	],
	[
		accountQueries,
		feedbackQueries,
		achievementsQueries
	],
	[
		accountMutations,
		feedbackMutations,
		achievementsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		accountResolvers,
		feedbackResolvers,
		achievementsResolvers
	)
});
