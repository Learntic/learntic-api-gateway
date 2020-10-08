import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	achievementsMutations,
	achievementsQueries,
	achievementsTypeDef
} from './achievements/user_achievements/typeDefs';
import {
	accountMutations,
	accountQueries,
	accountTypeDef
} from './auth/typeDefs';
import accountResolvers from './auth/resolvers';
import achievementsResolvers from './achievements/user_achievements/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		accountTypeDef,
		achievementsTypeDef
	],
	[
		accountQueries,
		achievementsQueries
	],
	[
		accountMutations,
		achievementsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		accountResolvers,
		achievementsResolvers
	)
});
