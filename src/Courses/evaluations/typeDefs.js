export const EvaluationTypeDef = `
  type Evaluation {
      id:Int!
      student: String!
      qualification:Float!
      type:String!
      date:String!      
  }
  input EvaluationInput {
    student: String!
    qualification:Float!
    type:String!
    date:String!
  }
  type Quiz {
      id:Int!
      student: String!
      qualification:Float!
      type:String!
      date:String!
  }
  input QuizInput {
      student: String!
      qualification:Float!
      type:String!
      date:String!
  }
  type Blank{
    id: Int
}`;

export const EvaluationQueries = `
        allEvaluation: [Evaluation]!
        allQuiz: [Quiz]!

        evaluationById(id: Int!): Evaluation!
        quizById(id: Int!): Quiz!

        evaByStudent(student: String!):[Evaluation]!

  `;
export const EvaluationMutations = `
        createEvaluation(eva: EvaluationInput!): Evaluation! 
        updateEvaluation(id: Int!, eva: EvaluationInput!): Evaluation!  
        deleteEvaluation(id: Int!): Blank        

        createQuiz(qz: QuizInput!): Quiz! 
        updateQuiz(id: Int!, qz: QuizInput!): Quiz!  
        deleteQuiz(id: Int!): Blank      
`;
