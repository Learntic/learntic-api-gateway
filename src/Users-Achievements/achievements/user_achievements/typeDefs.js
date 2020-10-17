export const achievementsTypeDef = `
  type achievement {
      name: String!
      description: String
	}
 	input achievementInput {
      name: String!
      description: String
  }
	type userAchievements {
      username: String!
      shared: Boolean
			achievements_id: String!
  }
  input userAchievementsInput {
      username: String!
      shared: Boolean!
			achievements_id: String!
  }
  type Category {
      id: Int!
      name: String!
  }
  input CategoryInput {
      name: String!
      description: String!
  }
	type userWithAchievements{
		username: String!
		achievements: [achievement]!
	}
	type outUserWithAchievements{
		container: [userWithAchievements]
	}
`;

export const achievementsQueries = `
      allUsers(token : String): [userAchievements]!
      allAchievements: [achievement]!
			GetAchievementsByUsernames(names:[String]): [userWithAchievements]!
      categoryById(id: Int!): Category!
  `;

export const achievementsMutations = `
		createUserAchievements(user_achievement2: userAchievementsInput): userAchievements!
		createAchievement(achievement2: achievementInput): achievement!
		createAchievement(achievement2: achievementInput): achievement!
		deleteAchievement(id : String!): String
		deleteUserAchievement(id : String!): String
    createCategory(category: CategoryInput!): Category!
    updateCategory(id: Int!, category: CategoryInput!): Category!
    deleteCategory(id: Int!): Int
`;
