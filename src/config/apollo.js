import { JsonApiLink } from 'apollo-link-json-api'
import { pascalize, camelize, decamelize } from 'humps'

export const jsonApiLink = new JsonApiLink({
  uri: 'https://jsonapiplayground.reyesoft.com/v2',
  typeNameNormalizer: type => pascalize(type),
  fieldNameNormalizer: name => camelize(name),
  fieldNameDenormalizer: name => decamelize(name)
})
