
import { useTaskStore } from '../store/taskStore'

export default function CategoryFilter() {
    const tasks = useTaskStore((state) => state.tasks)
    const selectedCategory = useTaskStore(
        (state) => state.selectedCategory
    )
    const setSelectedCategory = useTaskStore(
        (state) => state.setSelectedCategory
    )

    const categories = [...new Set(tasks.map((task) => task.category))]

    return (
        <div className="category-filter">
            <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                aria-pressed={selectedCategory === null}
            >
                Todas
            </button>

            {categories.map((category) => (
                <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={selectedCategory === category}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}
