// clase ToDoList para manejar 
// los atributos y métodos de una lista de ToDos

class ToDoList {
    list: {task: string, complete: boolean}[] = [];

    constructor() {
        this.list = [];
    }

    mostrarLista(): string {
        let mensaje: string  = 'Las tareas actuales son:\n';
        this.list.forEach( (item, index) => {
            mensaje += `${index+1}  ${item.task} ${item.complete===true?'Estado: COMPLETADO':'Estado: PENDIENTE'}\n`;
        });
        return mensaje;
    }


    crearTarea ( task: string ): void {
        this.list.push({task, complete: false});
    }
    
    
    modificarTarea ( task: string, indexTask: number ): void {
        this.list[indexTask-1].task = task;
    }
    
    
    numeroDeTareas (): number {
        return this.list.length;
    }


    borrarTarea (indexTask: number): void {
        this.list.splice(indexTask-1,1);
    }


    mostrarTarea( indexTask: number): string {
        return `${indexTask} ${this.list[indexTask - 1].task} ${this.list[indexTask -1].complete===true?'Estado: COMPLETADO':'Estado: PENDIENTE'}\n`;
    }


    mostrarTareasCompletadas( complete: boolean ): string {
        let mensaje: string  = `Las tareas ${complete?'COMPLETADAS':'PENDIENTES'} son:\n`;
        this.list.forEach( (item, index) => {
            if (item.complete === complete) {
                mensaje += `${index+1}  ${item.task} ${item.complete?' COMPLETADO':' PENDIENTE'}\n`;
            }
        });
        return mensaje;
    }

    marcarCompletado ( indexTask: number): void {
        this.list[indexTask-1].complete = true;
    }
  

}

export default ToDoList;