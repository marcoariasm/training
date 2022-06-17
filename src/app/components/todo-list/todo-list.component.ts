import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @ViewChild('txtBuscar') inputTask!: ElementRef<HTMLInputElement>;

  list: { task: string; complete: boolean }[] = [];

  nTasks : number = this.list.length;

  //   constructor() {
  //     this.list = [];
  //   }

  ngOnInit(): void {}

  crearTarea(): void {
    const task = this.inputTask.nativeElement.value;
    this.list.push({ task, complete: false });
    // console.log(task);
    this.inputTask.nativeElement.value = '';
  }

  crearTarea2(): void {
    const task = this.inputTask.nativeElement.value;
    this.list.push({ task, complete: false });
    // console.log('2',task);
    this.inputTask.nativeElement.value = '';
  }








  mostrarLista(): string {
    let mensaje: string = 'Las tareas actuales son:\n';
    this.list.forEach((item, index) => {
      mensaje += `${index + 1}  ${item.task} ${
        item.complete === true ? 'Estado: COMPLETADO' : 'Estado: PENDIENTE'
      }\n`;
    });
    return mensaje;
  }

  modificarTarea(task: string, indexTask: number): void {
    this.list[indexTask - 1].task = task;
  }

  numeroDeTareas(): number {
    return this.list.length;
  }

  borrarTarea(indexTask: number): void {
    this.list.splice(indexTask - 1, 1);
  }

  mostrarTarea(indexTask: number): string {
    return `${indexTask} ${this.list[indexTask - 1].task} ${
      this.list[indexTask - 1].complete === true
        ? 'Estado: COMPLETADO'
        : 'Estado: PENDIENTE'
    }\n`;
  }

  mostrarTareasCompletadas(complete: boolean): string {
    let mensaje: string = `Las tareas ${
      complete ? 'COMPLETADAS' : 'PENDIENTES'
    } son:\n`;
    this.list.forEach((item, index) => {
      if (item.complete === complete) {
        mensaje += `${index + 1}  ${item.task} ${
          item.complete ? ' COMPLETADO' : ' PENDIENTE'
        }\n`;
      }
    });
    return mensaje;
  }

  marcarCompletado(indexTask: number): void {
    this.list[indexTask - 1].complete = true;
  }
}
