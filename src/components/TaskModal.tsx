
import { useTaskStore } from '../store/taskStore'
import type { TaskStatus } from '../types/task'

const statusLabels: Record<TaskStatus, string> = {
    to_do: 'Por hacer',
    in_progress: 'En progreso',
    done: 'Terminada',
}

export default function TaskModal() {
    const tasks = useTaskStore((state) => state.tasks)
    const selectedTaskId = useTaskStore(
        (state) => state.selectedTaskId
    )
    const closeModal = useTaskStore((state) => state.closeModal)
    const updateTaskStatus = useTaskStore(
        (state) => state.updateTaskStatus
    )

    if (selectedTaskId === null) return null

    const task = tasks.find((item) => item.id === selectedTaskId)

    if (!task) return null

    return (
        <div
            className="modal-overlay"
            onClick={closeModal}
        >
            <div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="task-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <h2 id="task-modal-title">{task.title}</h2>

                <p>
                    <strong>Descripción:</strong> {task.description}
                </p>

                <p>
                    <strong>Estado:</strong> {statusLabels[task.status]}
                </p>

                <p>
                    <strong>Fecha:</strong>{' '}
                    {new Date(task.createdAt).toLocaleString('es-CL')}
                </p>

                <label htmlFor="task-status">Cambiar estado:</label>

                <select
                    id="task-status"
                    value={task.status}
                    onChange={(event) =>
                        updateTaskStatus(
                            task.id,
                            event.target.value as TaskStatus
                        )
                    }
                >
                    <option value="to_do">Por hacer</option>
                    <option value="in_progress">En progreso</option>
                    <option value="done">Terminada</option>
                </select>

                <button type="button" onClick={closeModal}>
                    Cerrar
                </button>
            </div>
        </div>
    )
}
