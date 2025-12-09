import React from 'react';
import { ApolloProvider } from "@apollo/client/react";
import AppRouter from './routers';
import { client } from '../shared/api/api';

import './styles/normolize.css';
import './styles/global.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
