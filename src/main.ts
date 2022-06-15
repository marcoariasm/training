import ToDoList from './todo-list/todo-list';

import { MENU } from './constants/constants';


let lista = new ToDoList();

const opcionSalir: number = 8;
let opcionMenu: number = 1|2|3|4|5|6|7|opcionSalir;
let final: boolean = false;


// main
while (!final){
    opcionMenu = +(prompt(MENU) || opcionSalir);
    if (opcionMenu === opcionSalir ) final = true;
    else {
        switch (opcionMenu) {
            case 1:{  // Crear tarea
                let task = prompt('Ingrese tarea:') || '';
                lista.crearTarea( task );
                alert(lista.mostrarLista());
                console.log(`La lista contiene ${lista.numeroDeTareas()} tarea(s).`);
                break;
            }
            case 2: { // Editar tarea
                if (lista.numeroDeTareas() <= 0){
                    alert('La lista no tiene tareas');
                    break;
                } else {
                    let indiceTarea : number;
                    let mensajeListaTareas : string = lista.mostrarLista(); 
                    indiceTarea = +(prompt(`${mensajeListaTareas}Ingrese número de tarea a editar:`) || -1);
                    let error: boolean = (indiceTarea > lista.numeroDeTareas() || indiceTarea < 0);
                    debugger;
                    if (error) {
                        while (error) {
                            indiceTarea = +prompt(`${mensajeListaTareas}Ingrese un número de tarea válido:`)!;
                            error = (indiceTarea > lista.numeroDeTareas() || indiceTarea <= 0);
                        }
                    } else {
                        let newTask : string = '';
                        newTask = prompt(`${lista.mostrarTarea(indiceTarea)}Ingrese nueva descripción:`)!;
                        let error2 : boolean = ( newTask == '');
                        while (error2) {
                            newTask = prompt(`${lista.mostrarTarea(indiceTarea)}La descripcion no puede ser vacía:`)!;
                            error2 = ( newTask == '');
                        }
                        lista.modificarTarea(newTask, indiceTarea);
                        alert(lista.mostrarLista());
                        console.log(`Tarea ${indiceTarea} editada con éxito`);
                    }
                }
                break;
            }
            case 3: {  // Borrar tarea
                if (lista.numeroDeTareas() == 0){
                    alert('La lista no tiene tareas');
                    break;
                } else {
                    let indiceTarea : number;
                    let mensajeListaTareas : string = lista.mostrarLista(); 
                    indiceTarea = +(prompt(`${mensajeListaTareas}Ingrese número de tarea a borrar:`) || -1);
                    let error: boolean = (indiceTarea > lista.numeroDeTareas() || indiceTarea < 0);
                    if (error) {
                        while (error) {
                            indiceTarea = +prompt(`${mensajeListaTareas}Ingrese un número de tarea válido:`)! || -1;
                            error = (indiceTarea > lista.numeroDeTareas() || indiceTarea < 0);
                        }
                    } else {
                        lista.borrarTarea(indiceTarea);
                        alert(lista.mostrarLista());
                        console.log(`Tarea borrada con éxito`);
                    }
                }
                break;
            }
            case 4: { //  Marcar completado
                if (lista.numeroDeTareas() == 0){
                    alert('La lista no tiene tareas');
                    break;
                } else {
                    let indiceTarea : number;
                    let mensajeListaTareas : string = lista.mostrarLista(); 
                    indiceTarea = +(prompt(`${mensajeListaTareas}Ingrese número de tarea a marcar COMPLETADO:`) || -1);
                    let error: boolean = (indiceTarea > lista.numeroDeTareas() || indiceTarea < 0);
                    if (error) {
                        while (error) {
                            indiceTarea = +prompt(`${mensajeListaTareas}Ingrese un número de tarea válido:`)! || -1;
                            error = (indiceTarea > lista.numeroDeTareas() || indiceTarea < 0);
                        }
                    } else {
                        lista.marcarCompletado(indiceTarea);
                        alert(lista.mostrarLista());
                        console.log(`Tarea ${indiceTarea} completada con éxito`);
                    }
                }
                break;
            }
            case 5: { // Mostrar lista
                if (lista.numeroDeTareas() == 0) {
                    alert('La lista no tiene tareas');
                } else {
                    alert(lista.mostrarLista());
                }
                break;
            }
            case 6: { // Mostrar lista de tareas completadas
                if (lista.numeroDeTareas() == 0) {
                    alert('La lista no tiene tareas');
                } else {
                    alert(lista.mostrarTareasCompletadas(true));
                }
                break;
            }
            case 7: { // Mostrar lista de tareas pendientes
                if (lista.numeroDeTareas() == 0) {
                    alert('La lista no tiene tareas');
                } else {
                    alert(lista.mostrarTareasCompletadas(false));
                }
                break;
            }
            default:
                break;
        }
    }
}
