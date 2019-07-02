import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const query = gql`
  query getAuthors {
    authors @jsonapi(path: "/authors") {
      name
    }
  }
`

const Authors = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) {
        return <div>Loading data...</div>
      }

      if (error) {
        return <div>Error quering api - {error.message}</div>
      }

      return <pre>{JSON.stringify(data, null, 2)}</pre>
    }}
  </Query>
)

export default Authors
