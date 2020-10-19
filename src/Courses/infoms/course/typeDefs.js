export const courseTypeDef = `
  type Curso {
      course_id: Int!
      course_description: String!
    course_name: String!
    course_score: Int!
  }
    input CadenaInput {
      cadena: String!
  }
  input Id{
    entero: Int!
  }
  input CourseInput {
      course_description: String!
    course_name: String!
  }`;

export const courseQueries = `
    allCourses: [Curso]!
    searchCourse(curso: CadenaInput!): [Curso]!
    getCourseName(id: Id!): String
  `;

export const courseMutations = `
    
`;
