import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import CardsList from "../components/CardsList";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErroBoundary";
import Scrol from "../components/Scrol";
import { searchRobots } from '../reducer.js';
import { setSearchField } from '../action.js';
const mapStateToProps = (state) => {
  return{
    searchField: state.searchField
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value))
    }
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
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
 


  render() {
    const {searchField,onSearchChange} = this.props;
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return (<h1>Loading....</h1>)
    }
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={onSearchChange}
          searchField={searchField} />
        <Scrol>
          <ErrorBoundary>
            <CardsList robots={filteredRobots} />
          </ErrorBoundary>

        </Scrol>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
