import React from 'react';

import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import Catalog from './containers/Catalog/Catalog'
import Contact from './containers/Contact/Contact'

import './App.scss';

const App = () => 
   (
    <Layout>
      <Switch>
        <Route path="/catalog" component={Catalog}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </Layout>
  );


export default App;
