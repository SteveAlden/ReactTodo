import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';

export class AddTodo extends Component {
  state = {
    title: ''
  };

  onChange = e => this.setState({ title: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          display: 'flex',
          background: '#E1E5EE;',
          boxShadow: '6px 6px 11px #bfc3ca, -6px -6px 11px #ffffff',
          margin: '8px 5px 20px 5px',
          borderRadius: '7px'
        }}
      >
        <TextField
          style={{
            margin: '7px',
            paddingTop: '10px',
            boxSizing: 'inherit',
            borderRadius: '7px 7px 0px 0px',
            boxShadow: 'inset 4px 4px 8px #bfc3ca, inset -4px -4px 8px #ffffff'
          }}
          id='standard-full-width'
          color='secondary'
          label=' What do you want to do...?'
          fullWidth
          autoComplete='off'
          required
          value={this.state.title}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

export default AddTodo;
