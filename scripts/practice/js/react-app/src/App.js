import React from 'react';
import TestFunction from './TestFunction';
import TestClass from './TestClass';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello</p>
          <TestFunction/>
          <TestClass />
        </header>
      </div>
    );
  }
}

export default App;
