import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import CardsList from "../components/CardsList";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErroBoundary";
//import { robots } from "./robots";
import Scrol from "../components/Scrol";
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ""
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      return response.json();
    }).then(users => {
      console.log("Setting state");
      this.setState({ robots: users });
      console.log(users);
    });

  }
  onSearchChange = (event) => {
    // console.log("Checking flow here!!!");
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return (<h1>Loading....</h1>)
    }
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange}
          searchfield={this.state.searchfield} />
        <Scrol>
          <ErrorBoundary>
            <CardsList robots={filteredRobots} />
          </ErrorBoundary>

        </Scrol>
      </div>
    );
  }
}

export default App;
