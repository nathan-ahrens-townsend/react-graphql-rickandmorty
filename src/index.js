import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"; // used to establish connection to GraphQL server
import { BrowserRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import categoriesReducer from "./features/categories";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const store = configureStore({
  reducer: {
    categories: categoriesReducer
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}> {/*wrapper for client, establishes connection to GraphQL server*/}
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
