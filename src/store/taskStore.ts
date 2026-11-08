
import { create } from 'zustand'
import type { Task, TaskStatus } from '../types/task'

interface TaskState {
    tasks: Task[]
    selectedTaskId: string | null

    addTask: (title: string, description: string) => void
    openModal: (id: string) => void
    closeModal: () => void
    updateTaskStatus: (id: string, status: TaskStatus) => void
}

export const useTaskStore = create<TaskState>((set) => ({
    tasks: [],
    selectedTaskId: null,

    addTask: (title, description) => {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title,
            description,
            status: 'to_do',
            createdAt: new Date().toISOString(),
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
}))
