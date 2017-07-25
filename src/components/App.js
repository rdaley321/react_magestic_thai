import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './Layout'
import Appetizers from './Appetizers'
import Entrees from './Entrees'
import Desserts from './Desserts'
// Import BaseLayout, Appetizers, Entrees, Desserts



class App extends Component {
// Set initial state for appetizers, entrees, and desserts.
// All should be set to empty arrays.
  constructor() {
    super()
    this.state = {
      appetizers: [],
      entrees: [],
      desserts: []
    }
  }

// Lifecycle method
// Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
// The response should return an object with appetizers, entres, and desserts.
// Set these to state.
// YOUR CODE HERE>
  componentDidMount() {
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
    .then(results => results.json())
    .then(data => {
      console.log(data)
      this.setState({
        appetizers: data[0].Appetizers,
        entrees: data[0].Entrees,
        desserts: data[0].Desserts
      })
    })
  }

  render() {
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (
      <BaseLayout>
        <Appetizers items={this.state.appetizers}/>
        <Entrees items={this.state.entrees}/>
        <Desserts items={this.state.desserts}/>
      </BaseLayout>
    );
  }
}

export default App;
