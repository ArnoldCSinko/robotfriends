// Import Dependencies
import { 
  React,
  Component,
  connect,
  CardList,
  SearchBox,
  Header,
  changeSearchField,
  getUsers,
} from './imports';

import './App.css';
import 'tachyons';

const mapStateToProps = state => ({
  search: state.search  
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(changeSearchField(event.target.value))
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      
    }
  }

  componentDidMount() {    
    getUsers()
      .then(users => this.setState({ robots: users }))
  }  

  render() {
    const { robots } = this.state;
    const {search, onSearchChange } = this.props;
    const filteredRobots =
      robots.filter(robot =>
        robot.name.toLowerCase()
          .includes(search.toLowerCase()))
    return (
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
