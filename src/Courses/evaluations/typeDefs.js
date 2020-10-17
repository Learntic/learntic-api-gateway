export const EvaluationTypeDef = `
  type Evaluation {
      id:Int!
      id_student: Int!
      qualification:String!
      type:String!
      date:String!      
  }
  input EvaluationInput {
    id_student: Int!
    qualification:String!
    type:String!
    date:String!
  }
  type Quiz {
      id:Int!
      id_student: Int!
      qualification:String!
      type:String!
      date:String!
  }
  input QuizInput {
      id_student: Int!
      qualification:String!
      type:String!
      date:String!
  }
  type BlankId{
    id: Int
}`;

export const EvaluationQueries = `
        allEvaluation: [Evaluation]!
        allQuiz: [Quiz]!
        evaluationById(id: Int!): Evaluation!
        quizById(id: Int!): Quiz!
  `;
export const EvaluationMutations = `
        createEvaluation(eva: EvaluationInput!): Evaluation! 
        updateEvaluation(id: Int!, eva: EvaluationInput!): Evaluation!  
        deleteEvaluation(id: Int!): BlankId

        createQuiz(qz: QuizInput!): Quiz! 
        updateQuiz(id: Int!, qz: QuizInput!): Quiz!  
        deleteQuiz(id: Int!): BlankId      
`;
