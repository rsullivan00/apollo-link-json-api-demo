import React from 'react'
import { jsonApiLink } from './config/apollo'
import GraphiQL from 'graphiql'
import './App.css'
import 'graphiql/graphiql.css'
import { execute } from 'apollo-link'
import { parse } from 'graphql'
import schema from './schema'

const fetcher = operation => {
  operation.query = parse(operation.query)
  return execute(jsonApiLink, operation)
}

const authorsQuery = `
# This GraphiQL explorer hits a JSON API at https://jsonapiplayground.reyesoft.com
query getJsonApiStuff {
  authors @jsonapi(path: "/authors?include=books") {
    id
    type
    name
    birthplace
    books {
      id
      type
      title
      datePublished
      isbn
    }
  }
  photos @jsonapi(path: "/photos") {
    name
    uri
  }
}
`

const App = () => (
  <GraphiQL fetcher={fetcher} schema={schema} query={authorsQuery} />
)

export default App
