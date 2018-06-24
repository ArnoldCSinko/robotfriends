// Import Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import Header from '../../components/Header';
import { changeSearchField, requestRobots } from '../../actions';


import './App.css';
import 'tachyons';

const mapStateToProps = ({ searchRobots, requestRobots }) => ({
  search: searchRobots.search,
  robots: requestRobots.robots,
  ispending: requestRobots.ispending,
  error: requestRobots.error
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(changeSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { search, onSearchChange, robots, isPending } = this.props;
    const filteredRobots =
      robots.filter(robot =>
        robot.name.toLowerCase()
          .includes(search.toLowerCase()));
    return isPending ? <h1>Loading...</h1> :
      (
        <div className="App">
          <Header>
            <h1 className="app-title">Meet The Monsters</h1>
            <SearchBox handleChange={onSearchChange} />
          </Header>
          <CardList robots={filteredRobots} />
        </div>
      );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
