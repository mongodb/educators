import { ApolloClient, InMemoryCache } from '@apollo/client';

const headers = {
  access_token: process.env.CS_DELIVERY_TOKEN || '',
  branch: 'main',
  'content-type': 'application/json',
};

const uri = process.env.CS_GRAPHQL_URL + '?environment=production';
const client = new ApolloClient({
  // https://www.apollographql.com/docs/react/performance/server-side-rendering#initializing-apollo-client
  ssrMode: true, // prevents ApolloClient from refetching queries unnecessarily
  cache: new InMemoryCache(),
  uri,
  headers,
});

export default client;
