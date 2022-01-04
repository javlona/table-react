import {Component} from 'react'
import './App.css';
import {Card} from './components/cards/card.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      users: []
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
        <Card name = "Javlon"/>
        {
          this.state.users.map(item => (
            <p key={item.id}>{item.name}</p>
          ))
        }

      </div>
    )
  }
}


export default App;
