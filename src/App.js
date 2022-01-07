import { Component } from 'react'
import './App.css';
import { CardHolder } from './components/cards/card-holder.component';
import { SearchBar } from './components/search/search.component'
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      users: [],
      showEditMenu: false,
      search: "",
    };
  }

  componentDidMount() {

    try {

      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({
          users: users
        }));

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const {users, search} = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
    
    return ( 
    <div className = "App" >
      <SearchBar
        placeholder = "Search..."
        handleChange = { e => this.setState({search: e.target.value}) } />
      <CardHolder users = { filteredUsers }/>
    </div>

    )
  }
}


export default App;