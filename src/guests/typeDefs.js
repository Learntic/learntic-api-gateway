export const guestTypeDef = `
type Guest {
    id: Int!
    nombre: String!
    apellido: String!
}
`;

export const guestQueries = `
    allGuests: [Guest]
  `;