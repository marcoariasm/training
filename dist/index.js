"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let final = false;
let salir = 8;
let eleccion = 1 | 2 | 3 | 4 | 5 | 6 | 7 | salir;
let list = [{ task: '', complete: false }];
const mostrarTareas = (list) => {
    if (list[0].task !== '') {
        let mensaje = '';
        mensaje += 'Las tareas actuales son:\n';
        list.map((item, index) => {
            mensaje += `${index + 1} ${item.task} ${item.complete === true ? 'COMPLETADO' : 'PENDIENTE'}\n`;
        });
        alert(mensaje);
    }
};
const modificarTarea = (list, i) => {
    let texto = prompt(`${i} ${list[i - 1].task} ${list[i].complete === true ? 'COMPLETADO' : 'PENDIENTE'}
    Ingrese nueva descripción de tarea:`) || '';
    list[i - 1].task = texto;
    console.log('Tarea modificada con éxito');
};
const borrarTarea = (list, i) => {
    list.splice(i - 1, 1);
};
const completarTarea = (list, i) => {
    list[i - 1].complete = true;
};
const mostrarTareasCompletadas = (list, completadas) => {
    let mensaje = '';
    list.forEach((item, index) => {
        if (item.complete === completadas) {
            mensaje += `${index + 1} ${item.task} ${item.complete === true ? 'COMPLETADO' : 'PENDIENTE'}\n`;
        }
    });
    alert(`Tareas ${completadas ? 'completas:' : 'incompletas:'}\n${mensaje}`);
};
// main
while (!final) {
    eleccion = +(prompt(`
    1. Crear tarea
    2. Editar tarea
    3. Borrar tarea
    4. Marcar completado
    5. Mostrar lista de tareas
    6. Mostrar tareas completadas
    7. Mostrar tareas pendientes
    8. Salir.      
    Ingrese elección: `) || salir);
    if (eleccion === salir)
        final = true;
    else {
        switch (eleccion) {
            case 1: {
                let task = prompt('Ingrese tarea:') || '';
                let item = { task, complete: false };
                if (list[0].task === '') {
                    list.shift();
                }
                list.push(item);
                console.log(`La lista contiene ${list.length} tarea(s).`);
                break;
            }
            case 2: {
                mostrarTareas(list);
                let indiceTarea = 1;
                let error = false;
                while (!error) {
                    if (indiceTarea > list.length || indiceTarea <= 0 || list[0].task === '') {
                        if (list[0].task === '') {
                            alert('La lista no tiene tareas');
                        }
                        else {
                            alert('Ingrese un número de tarea válido');
                        }
                        error = true;
                    }
                    else {
                        indiceTarea = +(prompt('Ingrese tarea a editar:') || 0);
                        modificarTarea(list, indiceTarea);
                        console.log('Tarea modificada con éxito');
                        mostrarTareas(list);
                        error = true;
                    }
                }
                break;
            }
            case 3: {
                mostrarTareas(list);
                let indiceTarea = 1;
                let error = false;
                while (!error) {
                    if (indiceTarea > list.length || indiceTarea <= 0 || list[0].task === '') {
                        if (list[0].task === '') {
                            alert('La lista no tiene tareas');
                        }
                        else {
                            alert('Ingrese un número de tarea válido');
                        }
                        error = true;
                    }
                    else {
                        indiceTarea = +(prompt('Ingrese tarea a borrar:') || 0);
                        borrarTarea(list, indiceTarea);
                        console.log('Tarea borrada con éxito');
                        mostrarTareas(list);
                        error = true;
                    }
                }
                break;
            }
            case 4: {
                mostrarTareas(list);
                let indiceTarea = 1;
                let error = false;
                while (!error) {
                    if (indiceTarea > list.length || indiceTarea <= 0 || list[0].task === '') {
                        if (list[0].task === '') {
                            alert('La lista no tiene tareas');
                        }
                        else {
                            alert('Ingrese un número de tarea válido');
                        }
                        error = true;
                    }
                    else {
                        indiceTarea = +(prompt('Ingrese tarea a marcar COMPLETADA:') || 0);
                        completarTarea(list, indiceTarea);
                        console.log('Tarea marcada completada con éxito');
                        mostrarTareas(list);
                        error = true;
                    }
                }
                break;
            }
            case 5: {
                if (list[0].task == '') {
                    alert('La lista no tiene tareas');
                }
                else {
                    mostrarTareas(list);
                }
                break;
            }
            case 6: {
                if (list[0].task == '') {
                    alert('La lista no tiene tareas');
                }
                else {
                    mostrarTareasCompletadas(list, true);
                }
                break;
            }
            case 7: {
                if (list[0].task == '') {
                    alert('La lista no tiene tareas');
                }
                else {
                    mostrarTareasCompletadas(list, false);
                }
                break;
            }
            default:
                break;
        }
    }
}