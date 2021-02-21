import { ToDo } from '../actions';
import { ActionTypes, Action } from '../actions/types';

export const todosReducer = (state: ToDo[] = [], action: Action): ToDo[] => {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todo: ToDo) => todo.id !== action.payload);
        default:
            return state;
    }
};
