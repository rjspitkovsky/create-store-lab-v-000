import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleHometownChange(event) {
    this.setState({
      hometown: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        Username:<input type="text" onChange={(event) => this.handleUsernameChange(event)}/>
        Hometown:<input type="text" onChange={(event) => this.handleHometownChange(event)}/>
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
