import ToDoList from './todo-list/todo-list';
import { MENU } from './constants/constants';
var lista = new ToDoList();
var opcionSalir = 8;
var opcionMenu = 1 | 2 | 3 | 4 | 5 | 6 | 7 | opcionSalir;
var final = false;
// main
while (!final) {
    opcionMenu = +(prompt(MENU) || opcionSalir);
    if (opcionMenu === opcionSalir)
        final = true;
    else {
        switch (opcionMenu) {
            case 1: { // Crear tarea
                var task = prompt('Ingrese tarea:') || '';
                lista.crearTarea(task);
                console.log("La lista contiene ".concat(lista.numeroDeTareas(), " tarea(s)."));
                break;
            }
            case 2: { // Editar tarea
                if (lista.numeroDeTareas() <= 0) {
                    alert('La lista no tiene tareas');
                    break;
                }
                else {
                    var indiceTarea = void 0;
                    var mensajeListaTareas = lista.mostrarLista();
                    indiceTarea = +(prompt("".concat(mensajeListaTareas, "Ingrese n\u00FAmero de tarea a editar:")) || -1);
                    var error = (indiceTarea > lista.numeroDeTareas() || indiceTarea < 0);
                    debugger;
                    if (error) {
                        while (error) {
                            indiceTarea = +prompt("".concat(mensajeListaTareas, "Ingrese un n\u00FAmero de tarea v\u00E1lido:"));
                            error = (indiceTarea > lista.numeroDeTareas() || indiceTarea <= 0);
                        }
                    }
                    else {
                        var newTask = '';
                        newTask = prompt("".concat(lista.mostrarTarea(indiceTarea), "Ingrese nueva descripci\u00F3n:"));
                        var error2 = (newTask == '');
                        while (error2) {
                            newTask = prompt("".concat(lista.mostrarTarea(indiceTarea), "La descripcion no puede ser vac\u00EDa:"));
                            error2 = (newTask == '');
                        }
                        lista.modificarTarea(newTask, indiceTarea);
                        console.log("Tarea ".concat(indiceTarea, " editada con \u00E9xito"));
                    }
                }
                break;
            }
            case 3: { // Borrar tarea
                if (lista.numeroDeTareas() == 0) {
                    alert('La lista no tiene tareas');
                    break;
                }
                else {
                    var indiceTarea = void 0;
                    var mensajeListaTareas = lista.mostrarLista();
                    indiceTarea = +(prompt("".concat(mensajeListaTareas, "Ingrese n\u00FAmero de tarea a borrar:")) || -1);
                    var error = (indiceTarea > lista.numeroDeTareas() || indiceTarea < 0);
                    if (error) {
                        while (error) {
                            indiceTarea = +prompt("".concat(mensajeListaTareas, "Ingrese un n\u00FAmero de tarea v\u00E1lido:")) || -1;
                            error = (indiceTarea > lista.numeroDeTareas() || indiceTarea < 0);
                        }
                    }
                    else {
                        lista.borrarTarea(indiceTarea);
                        console.log("Tarea borrada con \u00E9xito");
                    }
                }
                break;
            }
            case 4: { //  Marcar completado
                if (lista.numeroDeTareas() == 0) {
                    alert('La lista no tiene tareas');
                    break;
                }
                else {
                    var indiceTarea = void 0;
                    var mensajeListaTareas = lista.mostrarLista();
                    indiceTarea = +(prompt("".concat(mensajeListaTareas, "Ingrese n\u00FAmero de tarea a marcar COMPLETADO:")) || -1);
                    var error = (indiceTarea > lista.numeroDeTareas() || indiceTarea < 0);
                    if (error) {
                        while (error) {
                            indiceTarea = +prompt("".concat(mensajeListaTareas, "Ingrese un n\u00FAmero de tarea v\u00E1lido:")) || -1;
                            error = (indiceTarea > lista.numeroDeTareas() || indiceTarea < 0);
                        }
                    }
                    else {
                        lista.marcarCompletado(indiceTarea);
                        console.log("Tarea ".concat(indiceTarea, " completada con \u00E9xito"));
                    }
                }
                break;
            }
            case 5: { // Mostrar lista
                if (lista.numeroDeTareas() == 0) {
                    alert('La lista no tiene tareas');
                }
                else {
                    alert(lista.mostrarLista());
                }
                break;
            }
            case 6: { // Mostrar lista de tareas completadas
                if (lista.numeroDeTareas() == 0) {
                    alert('La lista no tiene tareas');
                }
                else {
                    alert(lista.mostrarTareasCompletadas(true));
                }
                break;
            }
            case 7: { // Mostrar lista de tareas pendientes
                if (lista.numeroDeTareas() == 0) {
                    alert('La lista no tiene tareas');
                }
                else {
                    alert(lista.mostrarTareasCompletadas(false));
                }
                break;
            }
            default:
                break;
        }
    }
}
