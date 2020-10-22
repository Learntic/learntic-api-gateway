export const topicTypeDef = `
  type Tema {
    topic_id: Int!
    topic_description: String!
    topic_name: String!
    topic_url: String!
  }
    
  input EnteroInput{
    entero: Int!
  }
  `;

export const topicQueries = `
      courseTopics(idCurso: EnteroInput!): [Tema]!
  `;

export const topicMutations = `
    
`;
