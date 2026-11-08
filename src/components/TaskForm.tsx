// P3: formulario para crear tareas.
//
// Pide título y descripción, y al enviarlo llama a la acción del store que
// agrega la tarea. La tarea nueva debe aparecer sola en la columna "Por hacer",
// sin que este componente tenga que avisarle a nadie: basta que el tablero lea
// las tareas del store.
//


import { useState, type FormEvent } from 'react'
import { useTaskStore } from '../store/taskStore'

export default function TaskForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const addTask = useTaskStore((state) => state.addTask)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!title.trim()) return

        addTask(title.trim(), description.trim())

        setTitle('')
        setDescription('')
    }

    return (
        <form className="toolbar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <button type="submit">Agregar tarea</button>
        </form>
    )
}

// P5: agregue el campo de categoría y envíelo a la acción.
//
// La barra que lo contiene usa la clase .toolbar del CSS.
//
// import { useState } from 'react'
// import { useTaskStore } from '../store/taskStore'
//
// const TaskForm = () => { ... }
//
// export default TaskForm
