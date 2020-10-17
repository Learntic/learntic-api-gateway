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
      myFriends(token: String!, id: String!): [User]!
      friendsAchievements: User
      getUser(token: String!, id: String!): User!
  `;

export const usersMutations = `
    createUser(token: String!, user : newUserInput!): User!
    updateUser(token: String!, id: String!, user : updateUserInput!): User!
    addFriend(data : friendshipInput!): Friendship
`;