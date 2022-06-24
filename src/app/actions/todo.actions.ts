import { Todo } from "../interfaces/todo.interface";

export class AddItem {
    static readonly type = 'Todo/Add';

    constructor(public payload: Todo) {}
};

export class EraseItem {
    static readonly type = 'Todo/Remove';

    constructor(public payload: string) {}
};

export class ModifyItem {
    static readonly type = 'Todo/Modify';

    constructor( public payload: {id: string, task: string}) {}
};

export class MarkCompleteItem {
    static readonly type = 'Todo/Toggle';

    constructor( public payload: {id: string, complete: boolean}) {}
}