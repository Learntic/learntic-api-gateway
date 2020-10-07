export const usersTypeDef = `
type User {
    uid: String
    fullname  : String
    username: String!
    email : String
    age : Int
}

type Friendship{
    uid: String
    friends: [User]
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
      myFriends(id: String!): [User]!
      friendsAchievements: User
  `;

export const usersMutations = `
    createUser(user : newUserInput!): User!
    updateUser(id: String!, user : updateUserInput!): User!
    addFriend(data : friendshipInput!): Friendship
`;
