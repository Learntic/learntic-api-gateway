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
} from './Microservice/feedback/typeDefs';

import {
	courseMutations,
	courseQueries,
	courseTypeDef
} from './infoms/course/typeDefs';

import {
	topicMutations,
	topicQueries,
	topicTypeDef
} from './infoms/topic/typeDefs';

import {
	inscriptionMutations,
	inscriptionQueries,
	inscriptionTypeDef
} from './inscriptionms/typeDefs';



import accountResolvers from './auth/resolvers';
import courseResolvers from './infoms/course/resolvers';
import topicResolvers from './infoms/topic/resolvers';
import feedbackResolvers from './Microservice/feedback/resolvers';
import inscriptionResolvers from './inscriptionms/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		accountTypeDef,
		feedbackTypeDef,
        courseTypeDef,
        topicTypeDef,
        inscriptionTypeDef
	],
	[
		accountQueries,
		feedbackQueries,
        courseQueries,
        topicQueries,
        inscriptionQueries
	],
	[
        courseMutations,
		accountMutations,
		feedbackMutations,
        topicMutations,
        inscriptionMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		accountResolvers,
		feedbackResolvers,
        courseResolvers,
        topicResolvers,
        inscriptionResolvers
	)
});
