import React, { Component } from 'react';
import uuid from 'uuid';
import Users from './Components/users.js';
import AddUser from './Components/addUser.js';

let sel = 0;

class App extends Component {
  constructor(){
    super()
    this.state = {
      usuarios: []
    }
  }

  addUser(){
    sel = 0;
    this.forceUpdate();
  }

  verUser(){
    sel = 1;
    this.forceUpdate();
  }

  handleDelete(user){
    let users = this.state.usuarios;
    
    let index = users.findIndex(x => x.id === user.id);
    // console.log(index);

    users.splice(index,1);
    // console.log(users);
    this.setState({usuarios: users});
  }

  handleAdd(newUser){
    // console.log(newUser);
    let users = this.state.usuarios;
    users.push(newUser);
    sel = 1;
    this.setState({usuarios: users});
    // console.log(this.state.usuario);
  }

  componentWillMount(){
    this.setState({usuarios: [{
      id: uuid.v4(),
      nome:"Mathias",
      idade:17
    },{
      id: uuid.v4(),
      nome:"João",
      idade:29
    },{
      id: uuid.v4(),
      nome:"Lucas",
      idade:32
    }]})
  }

  render() {
    if(sel === 0){
        return (
          <div id="cp">
            <h1 className="text-center">UserApp</h1>
            <div className="btn-group">
              <button onClick={this.addUser.bind(this)} className="btn btn-primary button" >Add User</button>
              <button onClick={this.verUser.bind(this)} className="btn btn-success button" >Ver User</button>
            </div>
            <AddUser addUser={this.handleAdd.bind(this)}/>
            <hr/>
          </div>
      );
    } else{
      return (
          <div id="cp">
            <h1 className="text-center">UserApp</h1>
            <div className="btn-group">
              <button onClick={this.addUser.bind(this)} className="btn btn-primary button" >Add User</button>
              <button onClick={this.verUser.bind(this)} className="btn btn-success button" >Ver User</button>
            </div>
            <hr/>
            <Users users={this.state.usuarios} delete={this.handleDelete.bind(this)}/>
          </div>
      );
  }
  }
}

export default App;
