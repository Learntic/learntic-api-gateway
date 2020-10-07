export const accountTypeDef = `
  type Evaluacion {
      id_evaluacion: String!
      id_estudiante: String!
      tipo_repeticion: String!
      nota: Int!
      fecha: Date!
  }
  type Quiz {
    id_quiz: String!
    id_estudiante: String!
    nota: Int!
    fecha: Date!
}
input EvaluacionInput {
      id_evaluacion: String!
      id_estudiante: String!
      tipo_repeticion: String!
      nota: Int!
      fecha: Date!
}
input QuizInput {
    id_quiz: String!
    id_estudiante: String!
    nota: Int!
    fecha: Date!
}`;

export const EvaluacionQueries = `
        allEvaluacion: [Evaluacion]!
        allQuiz: [Quiz]!
        EvaluacionById(id: Int!, token: String!): Evaluacion!
        QuizById(id: Int!, token: String!): Quiz!
  `;

export const EvaluacionMutations = `
        createEvaluacion(Evaluacion EvaluacionInput!): Evaluacion!
        updateEvaluacion(id: Int!, Evaluacion: EvaluacionInput!): Evaluacion!
        deleteEvaluacion(id: Int!): String

        createQuiz(Quiz QuizEvaluacionInput!): Quiz!
        updateQuiz(id: Int!, Quiz: QuizInput!): Quiz!
        deleteQuiz(id: Int!): String
`;
