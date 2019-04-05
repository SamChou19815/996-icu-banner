import React, { Component } from 'react';
import Banner from '@dev-sam/996-icu-banner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <header className="App-header">
          <p>The banner is shown above.</p>
          <p>
            Edit&nbsp;
            <a
              className="App-link"
              href="https://github.com/SamChou19815/996-icu-banner/tree/master/src/index.tsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>src/index.tsx</code>
            </a>
            &nbsp;to contribute.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React to effectively contribute.
          </a>
        </header>
      </div>
    );
  }
}

export default App;
