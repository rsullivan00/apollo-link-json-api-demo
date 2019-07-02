import { ApolloClient } from 'apollo-client'
import { JsonApiLink } from 'apollo-link-json-api'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { pascalize, camelize, decamelize } from 'humps'

const cache = new InMemoryCache()

const jsonApiLink = new JsonApiLink({
  uri: 'https://jsonapiplayground.reyesoft.com/v2',
  typeNameNormalizer: type => pascalize(type),
  fieldNameNormalizer: name => camelize(name),
  fieldNameDenormalizer: name => decamelize(name)
})

const client = new ApolloClient({
  cache,
  link: jsonApiLink
})

export default client
