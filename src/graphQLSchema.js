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
import accountResolvers from './auth/resolvers';
import categoryResolvers from './achievements/user_achievements/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		accountTypeDef,
		categoryTypeDef
	],
	[
		accountQueries,
		categoryQueries
	],
	[
		accountMutations,
		categoryMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		accountResolvers,
		categoryResolvers
	)
});
