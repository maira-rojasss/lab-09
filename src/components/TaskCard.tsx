// P2: tarjeta de una tarea dentro de una columna. Muestra el título y la fecha
// de creación.


import type { Task } from '../types/task'

interface TaskCardProps {
    task: Task
}

const TaskCard = ({ task }: TaskCardProps) => {
    return (
        <div className="card">
            <h3 className="card-title">{task.title}</h3>
            <p className="card-meta">
                {new Date(task.createdAt).toLocaleString('es-CL')}
            </p>
        </div>
    )
}

export default TaskCard


//
// P4: al hacer clic, llama a la acción del store que abre el modal, pasándole
// el id de la tarea.
//
// P5: muestre también la categoría.
//
// Use las clases .card, .card-title y .card-meta del CSS.
//
// import type { Task } from '../types/task'
// import { useTaskStore } from '../store/taskStore'
//
// interface TaskCardProps {
//   task: Task
// }
//
// const TaskCard = ({ task }: TaskCardProps) => { ... }
//
// export default TaskCard
