import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Login } from './components/Login';
import { Friends } from './components/Friends';
import { Output } from './components/Output';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/friends' component={Friends} />
        <Route exact path='/output' component={Output} />
        <Route exact path='/login' component={Login} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
