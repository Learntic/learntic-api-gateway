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
  type Blank{
    id: Int
}`;

export const inscriptionQueries = `
      inscriptionByUserId(id: String!): [String]
  `;

export const inscriptionMutations = `
    createInscription(inscription: InscriptionInput!): Inscription!
    updateInscription(id: Int!, inscription: InscriptionInput!): Inscription!
    deleteInscription(id: Int!): Blank
`;