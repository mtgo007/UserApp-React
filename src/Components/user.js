import React, { Component } from 'react';


class User extends Component {

    handleDelete(){
        // console.log(this.props.user);
        this.props.deleteUser(this.props.user);
    }
    
  render() {
    return (
      <div className="User">
        <li  className="list-group-item">Olá {this.props.user.nome}, sua idade é {this.props.user.idade} <button onClick={this.handleDelete.bind(this)} href="#" className="btn btn-danger ">X</button></li>
      </div>
    );
  }
}

export default User;
