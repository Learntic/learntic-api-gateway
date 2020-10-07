export const courseTypeDef = `
  type Curso {
      course_id: Int!
      course_description: String!
    course_name: String!
  }
    type CadenaInput {
      cadena: String!
  }
  input CourseInput {
      course_description: String!
    course_name: String!
  }`;

export const courseQueries = `
      allCourses: [Curso]!
    searchCourse(curso: CadenaInput!): [Curso]!
      
  `;

export const courseMutations = `
    
`;
