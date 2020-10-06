export const accountTypeDef = `
  type Account {
      nickName: String!
      password: String!
  }
  input AccountInput {
      nickName: String!
      password: String!
  }`;

export const accountQueries = `
      allAccounts: [Account]!

  `;

export const accountMutations = `
    createAccount(account: AccountInput!): Account!
`;
