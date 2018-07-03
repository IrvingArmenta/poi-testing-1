import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import Main from './components/main';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default hot(module)(App)
