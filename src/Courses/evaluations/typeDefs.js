export const EvaluacionTypeDef = `
  type Evaluacion {
      id_evaluacion: String!
      id_estudiante: String!
      tipo_repeticion: String!
      nota: Int!
  }
  type Quiz {
    id_quiz: String!
    id_estudiante: String!
    nota: Int!
}
input EvaluacionInput {
      id_evaluacion: String!
      id_estudiante: String!
      tipo_repeticion: String!
      nota: Int!
}
input QuizInput {
    id_quiz: String!
    id_estudiante: String!
    nota: Int!
}`;

export const EvaluacionQueries = `
        allEvaluacion: [Evaluacion]!
        allQuiz: [Quiz]!
        EvaluacionById(id: Int!): Evaluacion!
        QuizById(id: Int!): Quiz!
  `;

export const EvaluacionMutations = `
        createEvaluacion(Evaluacion: EvaluacionInput!): Evaluacion!
        updateEvaluacion(id: Int!, Evaluacion: EvaluacionInput!): Evaluacion!
        deleteEvaluacion(id: Int!): String

        createQuiz(Quiz: QuizInput!): Quiz!
        updateQuiz(id: Int!, Quiz: QuizInput!): Quiz!
        deleteQuiz(id: Int!): String
`;
