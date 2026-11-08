
import { create } from 'zustand'
import type { Task, TaskStatus } from '../types/task'

interface TaskState {
    tasks: Task[]
    selectedTaskId: string | null
    selectedCategory: string | null

    addTask: (
        title: string,
        description: string,
        category: string
    ) => void

    openModal: (id: string) => void
    closeModal: () => void
    updateTaskStatus: (id: string, status: TaskStatus) => void
    setSelectedCategory: (category: string | null) => void
}

export const useTaskStore = create<TaskState>((set) => ({
    tasks: [],
    selectedTaskId: null,
    selectedCategory: null,

    addTask: (title, description, category) => {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title,
            description,
            status: 'to_do',
            createdAt: new Date().toISOString(),
            category: category.trim() || 'general',
        }

        set((state) => ({
            tasks: [...state.tasks, newTask],
        }))
    },

    openModal: (id) => {
        set({ selectedTaskId: id })
    },

    closeModal: () => {
        set({ selectedTaskId: null })
    },

    updateTaskStatus: (id, status) => {
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id
                    ? { ...task, status }
                    : task
            ),
        }))
    },

    setSelectedCategory: (category) => {
        set({ selectedCategory: category })
    },
}))
