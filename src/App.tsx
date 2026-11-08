
import TaskForm from './components/TaskForm'
import TaskCard from './components/TaskCard'
import TaskModal from './components/TaskModal'
import CategoryFilter from './components/CategoryFilter'
import { useTaskStore } from './store/taskStore'
import type { TaskStatus } from './types/task'

const columns: { status: TaskStatus; title: string }[] = [
  { status: 'to_do', title: 'Por hacer' },
  { status: 'in_progress', title: 'En progreso' },
  { status: 'done', title: 'Terminada' },
]

function App() {
  const tasks = useTaskStore((state) => state.tasks)
  const selectedCategory = useTaskStore(
    (state) => state.selectedCategory
  )

  const filteredTasks = tasks.filter(
    (task) =>
      selectedCategory === null ||
      task.category === selectedCategory
  )

  return (
    <main>
      <h1>Gestor de tareas</h1>

      <TaskForm />

      <CategoryFilter />

      <div className="board">
        {columns.map((column) => {
          const columnTasks = filteredTasks.filter(
            (task) => task.status === column.status
          )

          return (
            <section key={column.status} className="column">
              <h2>{column.title}</h2>

              <div className="task-list">
                {columnTasks.length === 0 ? (
                  <p>No hay tareas en esta columna.</p>
                ) : (
                  columnTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))
                )}
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
