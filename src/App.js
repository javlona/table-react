import { Component } from 'react'
import './App.css';
import { CardHolder } from './components/cards/card-holder.component';
import { SearchBar } from './components/search/search.component'
import { Modal } from './components/modal/Modal'
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      users: [],
      search: "",
      isModalShown: false,
      modalData: {},
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
      console.error(err)
    }
  }

  deleteHandler = (id) => {
    let deleted = this.state.users.filter(item => item.id != id)
    this.setState({ users: deleted})
  }

  editHandler = (id) => {
    this.setState({ isModalShown: true })
    let user = this.state.users.find(item => item.id === id)
    this.setState({modalData: user})
  }

  updateHandler = (id) => {
    
  }

  closeModal = () => this.setState({ isModalShown: false })


  render() {
    const {users, search, isModalShown, modalData} = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )

    return ( 
    <div className = "App" >
      <SearchBar
        placeholder = "Search..."
        handleChange = { e => this.setState({search: e.target.value}) } />
      <CardHolder 
        users={ filteredUsers } 
        deleteHandler={ this.deleteHandler }
        editHandler={ this.editHandler }
      />
      {isModalShown && <Modal editHandler={ this.editHandler } closeModal={ this.closeModal } data={ modalData }/>}
    </div>

    )
  }
}


export default App;