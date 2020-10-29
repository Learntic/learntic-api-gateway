export const accountTypeDef = `
  type Account {
      username: String!
      password: String!
      token: String!
      uid: String!
      name: String!
      age: Int!
  }
  input AccountInput {
      username: String!
      password: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    name: String!
    age: Int!
  }
  input Token {
      token: String!
  }`;

export const accountQueries = `
      auth(token: Token!): Boolean!
      signIn(account: AccountInput!): Account!
  `;

export const accountMutations = `
    signUp(account: RegisterInput!): Account!
`;
