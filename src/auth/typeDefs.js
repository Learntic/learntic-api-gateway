export const accountTypeDef = `
  type Account {
      username: String!
      password: String!
      token: String!
      uid: String!
  }
  input AccountInput {
      username: String!
      password: String!
  }
  input Token {
      token: String!
  }`;

export const accountQueries = `
      auth(token: Token!): Boolean!
      signIn(account: AccountInput!): Account!
  `;

export const accountMutations = `
    signUp(account: AccountInput!): Account!
`;
