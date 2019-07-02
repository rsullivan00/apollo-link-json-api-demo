import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './config/apollo'
import Authors from './components/Authors'

const App = () => (
  <ApolloProvider client={client}>
    <Authors />
  </ApolloProvider>
)

export default App
