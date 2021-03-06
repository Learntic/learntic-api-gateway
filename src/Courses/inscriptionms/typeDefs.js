export const inscriptionTypeDef = `
  type  Inscription{
      id: Int!
      id_usuario: String!
      id_curso: Int!
      max_activity: Int!
  }
  input InscriptionInput {
    id_usuario: String!
    id_curso: Int!
    max_activity: Int!
  }
  type Cs{
    id: Int!
    nombre: String!
  }
  type Blank{
    id: Int
  }`;

export const inscriptionQueries = `
      coursesByUserId(id: String!): [Curso]
    inscriptionByUserIdAndCourseId(user_id: String!, course_id: Int!): Inscription!
    coursesByNotUserId(id: String!): [Curso]
  `;

export const inscriptionMutations = `
    createInscription(inscription: InscriptionInput!): Inscription!
    updateInscription(id: Int!, inscription: InscriptionInput!): Inscription!
    deleteInscription(id: Int!): Blank
`;