export const usersTypeDef = `
type User {
    uid: String!
    fullname  : String
    username: String
    email : String
    age : Int
    error: String
}

type Friendship{
    uid: String
    friends: [User]
    error: String
}
  
input newUserInput {
    username: String!
    fullname: String
    email: String
    age: Int
}

input updateUserInput {
    username: String
    fullname: String
    email: String
    age: Int
}

input friendshipInput {
    from: String!
    to: String!
}
`;

export const usersQueries = `
      myFriends(id: String!, token: String!): [User]!
      notMyFriends(id: String!, token: String!): [User]!
      getUser(id: String!, token: String!): User!
      getAllUsers(token: String!): [User]!
  `;

export const usersMutations = `
    updateUser(id: String!, user : updateUserInput!, token: String!): User!
    addFriend(data : friendshipInput!, token: String!): Friendship
`;
