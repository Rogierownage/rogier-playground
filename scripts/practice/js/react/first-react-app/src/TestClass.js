import React from "react";

class TestClass extends React.Component{
  render() {
    return (
      <p>Test (class, {this.props.name})</p>
    );
  }
}

export default TestClass;
