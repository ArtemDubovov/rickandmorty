import React, { useEffect } from 'react';
import { ApolloProvider } from "@apollo/client/react";

import './styles/normolize.css';
import './styles/global.css';
import AppRouter from './routers';
import { client } from '../shared/api/api';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
