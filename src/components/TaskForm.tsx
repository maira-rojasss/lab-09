
import { useState, type FormEvent } from 'react'
import { useTaskStore } from '../store/taskStore'

export default function TaskForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const addTask = useTaskStore((state) => state.addTask)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!title.trim()) return

        addTask(
            title.trim(),
            description.trim(),
            category.trim() || 'general'
        )

        setTitle('')
        setDescription('')
        setCategory('')
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

            <input
                type="text"
                placeholder="Categoría (opcional)"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            />

            <button type="submit">Agregar tarea</button>
        </form>
    )
}
