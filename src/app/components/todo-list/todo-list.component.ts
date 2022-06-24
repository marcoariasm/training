import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { AddItem, EraseItem, MarkCompleteItem } from 'src/app/actions/todo.actions';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoState } from 'src/app/state/todo.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @ViewChild('txtTask') inputTask!: ElementRef<HTMLInputElement>;

  @Select(TodoState.getList)
  todos$!: Observable<Todo>;

  list: { id: string; task: string; complete: boolean }[] = [];

  nTasks : number = this.list.length;

  inEdition : boolean = false;
  // checkboxValue : boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.todos$.subscribe((list: any) => {
      this.list = [];
      list.forEach((item: Todo) => {
        this.list.push(item);
      })
    })
  }

  crearTarea(): void {
    const task = this.inputTask.nativeElement.value;
    // this.list.push({ task, complete: false });
    // console.log(task);
    this.nTasks = this.list.length;
    const newTask: Todo = {
      id: uuidv4(),
      task,
      complete: false
    };
    
    this.store.dispatch(new AddItem(newTask))
    
    this.inputTask.nativeElement.value = '';
  }

  borrarTarea(indexTask: string): void {
    // this.list.splice(indexTask, 1);
    // this.nTasks = this.list.length;
    this.store.dispatch(new EraseItem(indexTask));
  }

  
  marcarCompletado(indexTask: string, event:any) {
    // this.list[indexTask].complete = event.target.checked;
    // console.log('cambio->', event.target.checked);
    console.log(indexTask);
    this.store.dispatch(new MarkCompleteItem({id: indexTask, complete: event.target.checked}))
  }

  
  modificarTarea(indexTask: number): void {
    this.inEdition = true;
    // console.log(this.list[indexTask]);
    this.inputTask.nativeElement.value = this.list[indexTask].task;
    // this.list[indexTask - 1].task = task;
  }

  // mostrarLista(): string {
  //   let mensaje: string = 'Las tareas actuales son:\n';
  //   this.list.forEach((item, index) => {
  //     mensaje += `${index + 1}  ${item.task} ${
  //       item.complete === true ? 'Estado: COMPLETADO' : 'Estado: PENDIENTE'
  //     }\n`;
  //   });
  //   return mensaje;
  // }


  // numeroDeTareas(): number {
  //   return this.list.length;
  // }

  // mostrarTarea(indexTask: number): string {
  //   return `${indexTask} ${this.list[indexTask - 1].task} ${
  //     this.list[indexTask - 1].complete === true
  //       ? 'Estado: COMPLETADO'
  //       : 'Estado: PENDIENTE'
  //   }\n`;
  // }

  // mostrarTareasCompletadas(complete: boolean): string {
  //   let mensaje: string = `Las tareas ${
  //     complete ? 'COMPLETADAS' : 'PENDIENTES'
  //   } son:\n`;
  //   this.list.forEach((item, index) => {
  //     if (item.complete === complete) {
  //       mensaje += `${index + 1}  ${item.task} ${
  //         item.complete ? ' COMPLETADO' : ' PENDIENTE'
  //       }\n`;
  //     }
  //   });
  //   return mensaje;
  // }

  // marcarCompletado(indexTask: number): void {
  //   this.list[indexTask - 1].complete = true;
  // }
  
}
