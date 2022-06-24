import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddItem, EraseItem, MarkCompleteItem } from "../actions/todo.actions";
import { Todo } from "../interfaces/todo.interface";

const initialState: Todo[] = [
    {
        id: 'a',
        task: 'Crear Todo List',
        complete: false
    },
    {
        id: 'b',
        task: 'Estudiar RxJs',
        complete: true
    },
    {
        id: 'c',
        task: 'Estudiar NGXS',
        complete: true
    }
];

export class TodoStateClass {
    list: Todo[] = [];
};

@State<TodoStateClass>({
    name: 'todo',
    defaults: {
        list: initialState
    }
})
@Injectable()
export class TodoState {

     @Selector() static getList(state: TodoStateClass) {
        return state.list;
     }

     @Action(AddItem)
     add({ getState, patchState }: StateContext<TodoStateClass>, { payload }: AddItem){
        const state = getState();
        patchState({
            list: [...state.list, payload]
        });
     }
     
     @Action(EraseItem) 
     remove({ getState, patchState}: StateContext<TodoStateClass>, { payload }: EraseItem){
        patchState({
            list: getState().list.filter(item => item.id !== payload)
        });
     }

     @Action(MarkCompleteItem)
     toggle({ getState, patchState}: StateContext<TodoStateClass>, { payload }: MarkCompleteItem) {
        const state = getState();
        state.list.map(item => {
            if(item.id === payload.id){
                return item.complete = payload.complete;
            }
            return item;
        });
        patchState({
            list: [...state.list]
        });
     }

}
