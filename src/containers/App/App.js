import React, { Component } from 'react';
import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import Header from '../../components/Header';


import { getUsers } from '../../api/apiCall';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      search: ''
    }
  }

  componentDidMount() {
    getUsers()
      .then(users => this.setState({ robots: users }))
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { robots, search } = this.state;
    const filteredRobots =
      robots.filter(robot =>
        robot.name.toLowerCase()
          .includes(search.toLowerCase()))
    return (
      <div className="App">
        <Header>
          <h1 className="app-title">Meet The Monsters</h1>
          <SearchBox handleChange={this.handleChange} />
        </Header>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
export default App;
