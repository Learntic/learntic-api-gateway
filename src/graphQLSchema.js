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

import {
	EvaluacionMutations,
	EvaluacionQueries,
	EvaluacionTypeDef,	
} from './Courses/evaluations/typeDefs';


import {
	courseMutations,
	courseQueries,
	courseTypeDef
} from './Courses/infoms/course/typeDefs';

import {
	topicMutations,
	topicQueries,
	topicTypeDef
} from './Courses/infoms/topic/typeDefs';

import {
	inscriptionMutations,
	inscriptionQueries,
	inscriptionTypeDef
} from './Courses/inscriptionms/typeDefs';

import accountResolvers from './auth/resolvers';

import feedbackResolvers from './Courses/feedback/resolvers';


import achievementsResolvers from './Users-Achievements/achievements/user_achievements/resolvers';

import evaluationResolvers from './Courses/evaluations/resolvers';

import courseResolvers from './Courses/infoms/course/resolvers';

import topicResolvers from './Courses/infoms/topic/resolvers';

import inscriptionResolvers from './Courses/inscriptionms/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		accountTypeDef,
		feedbackTypeDef,
		achievementsTypeDef,
		EvaluacionTypeDef,
		courseTypeDef,
		topicTypeDef,
		inscriptionTypeDef
	],
	[
		accountQueries,
		feedbackQueries,
		achievementsQueries,
		EvaluacionQueries,
		courseQueries,
		topicQueries,
		inscriptionQueries
	],
	[
		accountMutations,
		feedbackMutations,
		achievementsMutations,
		EvaluacionMutations,
		courseMutations,
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
		achievementsResolvers,
		evaluationResolvers,
		courseResolvers,
		topicResolvers,
		inscriptionResolvers
	)
});
