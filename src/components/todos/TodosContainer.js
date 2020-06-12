import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDo from './Todo'
 
class TodosContainer extends Component {
 
  render() {
    return(
      <div>
        {this.props.todos.map(todo => <ToDo todo={todo}/>)}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {todos: state.todos}
}
 
export default connect(mapStateToProps)(TodosContainer);