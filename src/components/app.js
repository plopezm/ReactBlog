import React, { Component } from 'react';

export default class App extends Component {
  render() {
    //Due to routing nesting, we have to render the props children where the child component is stored from router
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
