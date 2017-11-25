import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

import IconFont from './iconfont/styles.css';
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';




class App extends Component {
  normalizeCSS() {
    injectGlobal`
      *,
      *::after,
      *::before, {
        margin: 0;
        padding: 0;
        box-sizing: inherit;

      }

      html {
        font-size: 62.5%;
      }

      body {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        /*font-size: 16px;*/
        line-height: 1.7;
        color: #777;
        padding: 3rem;
        box-sizing: border-box;
      }
    `
  }

  render() {
    this.normalizeCSS()

    return (
      <div>
        <Header />
        <Main />
        <Features />
      </div>
    );
  }
}

export default App;
