import {Component} from 'react'
import './App.css';
import {CardHolder} from './components/cards/card-holder.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      users: [],
      showEditMenu: false,
    };
  }

  componentDidMount(){
    
    try {

      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({users: users}));

    } catch (err) {
      console.log(err)
    }
  }
 
  render() {
    return (
      <div className="App">
        <CardHolder users = {this.state.users} />
      </div>
    )
  }
}


export default App;
