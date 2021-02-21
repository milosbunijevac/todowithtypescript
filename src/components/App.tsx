import React from 'react';
import { connect } from 'react-redux';
import { ToDo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import './App.css';

interface AppProps {
    todos: ToDo[];
    // eslint-disable-next-line @typescript-eslint/ban-types
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}
class _App extends React.Component<AppProps> {
    // We need to pass in AppState and define an interface for it if we use the constructor

    onButtonClick = (): void => {
        this.props.fetchTodos();
    };

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: ToDo) => {
            return (
                <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
                    {todo.title}
                </div>
            );
        });
    }

    render(): JSX.Element {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    return {
        todos: state.todos,
    };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
