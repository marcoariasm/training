// clase ToDoList para manejar 
// los atributos y métodos de una lista de ToDos
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.list = [];
        this.list = [];
    }
    ToDoList.prototype.mostrarLista = function () {
        var mensaje = 'Las tareas actuales son:\n';
        this.list.forEach(function (item, index) {
            mensaje += "".concat(index + 1, "  ").concat(item.task, " ").concat(item.complete === true ? 'Estado: COMPLETADO' : 'Estado: PENDIENTE', "\n");
        });
        return mensaje;
    };
    ToDoList.prototype.crearTarea = function (task) {
        this.list.push({ task: task, complete: false });
    };
    ToDoList.prototype.modificarTarea = function (task, indexTask) {
        this.list[indexTask - 1].task = task;
    };
    ToDoList.prototype.numeroDeTareas = function () {
        return this.list.length;
    };
    ToDoList.prototype.borrarTarea = function (indexTask) {
        this.list.splice(indexTask - 1, 1);
    };
    ToDoList.prototype.mostrarTarea = function (indexTask) {
        return "".concat(indexTask, " ").concat(this.list[indexTask - 1].task, " ").concat(this.list[indexTask - 1].complete === true ? 'Estado: COMPLETADO' : 'Estado: PENDIENTE', "\n");
    };
    ToDoList.prototype.mostrarTareasCompletadas = function (complete) {
        var mensaje = "Las tareas ".concat(complete ? 'COMPLETADAS' : 'PENDIENTES', " son:\n");
        this.list.forEach(function (item, index) {
            if (item.complete === complete) {
                mensaje += "".concat(index + 1, "  ").concat(item.task, " ").concat(item.complete ? ' COMPLETADO' : ' PENDIENTE', "\n");
            }
        });
        return mensaje;
    };
    ToDoList.prototype.marcarCompletado = function (indexTask) {
        this.list[indexTask - 1].complete = true;
    };
    return ToDoList;
}());
export default ToDoList;
