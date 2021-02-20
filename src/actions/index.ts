import axios from 'axios';
import { Action, Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = `https://jsonplaceholder.typicode.com/todos`;

export interface ToDo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchToDosAction {
    type: ActionTypes.fetchTodos;
    payload: ToDo[];
}

export const fetchTodos = () => {
    return async (dispatch: Dispatch): Promise<void> => {
        // axios.get will return an array of ToDos... so do this.
        const response = await axios.get<ToDo[]>(url);

        dispatch<FetchToDosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data,
        });
    };
};
