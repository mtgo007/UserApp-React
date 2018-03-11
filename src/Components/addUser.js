import React, { Component } from 'react';
import uuid from 'uuid';

class AddUser extends Component {

  constructor(){
      super();
      this.state = {
          form :{}
      }
  }

  handleSubmit(e){
    this.setState({form:{
        id: uuid.v4(),
        nome:this.refs.nome.value,
        idade: this.refs.idade.value
    }}, function(){
        console.log(this.state.form);
        this.props.addUser(this.state.form);
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className="add">
        <h3>AddUsuario :)</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label>Nome</label><br/>
                <input type="text" ref="nome"/>
            </div>
            <div className="form-group">
                <label>idade</label><br/>
                <input type="number" ref="idade"/>
            </div>
            <div className="form-group">
                <input className="btn btn-primary" type="submit" value="add"/>
            </div>
        </form>
      </div>
    );
  }
}

export default AddUser;