export const feedbackTypeDef = `
  type Feedback {
      id: Int!
      id_usuario: String!
      id_curso: Int!
      opinion: String!
      nota: Float!
  }
  input FeedbackInput {
      id_usuario: String!
      id_curso: Int!
      opinion: String!
      nota: Float!
  }`;

export const feedbackQueries = `
      allFeedback: [Feedback]!
      feedbackById(id: Int!, token: String!): Feedback!
      feedbackByUser(id_usuario: String!, token: String!): [Feedback]!
      feedbackByCourse(id_curso: Int!, token: String!): [Feedback]!
  `;

export const feedbackMutations = `
    createFeedback(feedback: FeedbackInput!, token: String!): Feedback!
    updateFeedback(id: Int!, feedback: FeedbackInput!, token: String!): Feedback!
    deleteFeedback(id: Int!, token: String!): String!
`;
