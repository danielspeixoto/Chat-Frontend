
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import Chat from "./components/Chat";
import Layout from "./containers/Layout";

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>  
    <Layout>
      <Route exact path="/" component={ Chat }/>
    </Layout>
  </BrowserRouter>
  , root);