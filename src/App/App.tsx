import React from 'react';
import { ApolloProvider } from "@apollo/client/react";

import './styles/normolize.css';
import './styles/global.css';
import AppRouter from './routers';
import { client, useFetch } from '../shared/api/api';
import { GET_INFO_PAGE } from '../entities/api/query';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
