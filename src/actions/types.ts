import { FetchToDosAction, DeleteToDoAction } from './todos';

export enum ActionTypes {
    fetchTodos,
    deleteTodo,
}

export type Action = FetchToDosAction | DeleteToDoAction;
