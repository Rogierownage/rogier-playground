import React from 'react';
import TestFunction from './TestFunction';
import TestClass from './TestClass';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount(){
    axios('https://api.randomuser.me/?results=3').then(response => this.setState({users: response.data.results}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello {this.state.users[0]?.name?.first ?? '(Loading)'}</p>
          <TestFunction name="Hallo1"/>
          <TestClass name="Hallo2"/>
        </header>
      </div>
    );
  }
}

export default App;
