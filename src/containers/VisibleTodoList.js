import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../selector';

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos, ownProps.filter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);