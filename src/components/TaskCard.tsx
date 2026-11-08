
import type { Task } from '../types/task'
import { useTaskStore } from '../store/taskStore'

interface TaskCardProps {
    task: Task
}

const TaskCard = ({ task }: TaskCardProps) => {
    const openModal = useTaskStore((state) => state.openModal)

    return (
        <div
            className="card"
            onClick={() => openModal(task.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    openModal(task.id)
                }
            }}
        >
            <h3 className="card-title">{task.title}</h3>

            <p className="card-meta">
                {new Date(task.createdAt).toLocaleString('es-CL')}
            </p>
        </div>
    )
}

export default TaskCard
