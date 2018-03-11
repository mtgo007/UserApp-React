import React, { Component } from 'react';
import User from './user';

class Users extends Component {
    deleteUser(user){
        console.log(user);
        this.props.delete(user);
    }
  render() {
    let usuario;
    

    if(this.props.users){
        // console.log(this.props.users);
        usuario = this.props.users.map(user =>{
            return (<User key={user.nome} user={user} deleteUser={this.deleteUser.bind(this)}/>)
        });
        // console.log(usuario);
    }
    return (
      <div className="Users">
      <h3>Usuarios Cadastrados :)</h3>
        <ul className="list-group">
            {usuario}
        </ul>
      </div>
    );
  }
}

export default Users;
