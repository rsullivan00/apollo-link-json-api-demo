import { buildSchema } from 'graphql/utilities'

const resourceIdentifier = `
  id: ID!
  type: Type!
`
const schemaSource = `
  scalar Type
  scalar Date
  scalar HTTPVerb
  directive @jsonapi(path: String!, method: HTTPVerb) on FIELD

  schema {
    query: Query
  }

  type Query {
    authors: [Author]
    books: [Book]
    photos: [Photo]
  }

  type Author {
    ${resourceIdentifier}
    name: String
    birthplace: String
    dateOfBirth: Date
    dateOfDeath: Date
    photos: [Photo]
    books: [Book]
  }

  type Book {
    ${resourceIdentifier}
    title: String!
    datePublished: Date
    isbn: String
  }

  type Photo {
    ${resourceIdentifier}
    title: String!
    uri: String
  }
`

export default buildSchema(schemaSource)
