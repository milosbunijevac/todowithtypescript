import { ToDo, FetchToDosAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const todosReducer = (state: ToDo[] = [], action: FetchToDosAction): ToDo[] => {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        default:
            return state;
    }
};
