
import TaskForm from './components/TaskForm'
import TaskCard from './components/TaskCard'
import { useTaskStore } from './store/taskStore'
import type { TaskStatus } from './types/task'
import TaskModal from './components/TaskModal'

const columns: { status: TaskStatus; title: string }[] = [
  { status: 'to_do', title: 'Por hacer' },
  { status: 'in_progress', title: 'En progreso' },
  { status: 'done', title: 'Terminada' },
]

function App() {
  const tasks = useTaskStore((state) => state.tasks)

  return (
    <main>
      <h1>Gestor de tareas</h1>

      <TaskForm />

      <div className="board">
        {columns.map((column) => {
          const columnTasks = tasks.filter(
            (task) => task.status === column.status
          )

          return (
            <section key={column.status} className="column">
              <h2>{column.title}</h2>

              <div className="task-list">
                {columnTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <TaskModal />
    </main>
  )
}

export default App
