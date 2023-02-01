import React, { useState } from 'react';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import { ITask } from './components/TaskItem';
import { SearchTask } from './components/SearchTask';

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITask[]>([]);
    const [query, setQuery] = useState<string>('');

    const handleAddTask = (task: string): void => {
        setTodos([
            ...todos,
            { content: task, completed: false, id: crypto.randomUUID() },
        ]);
    };

    const handleCompleteTask = (id: string) => {
        setTodos(
            todos.map((task) => {
                if (task.id == id) task.completed = !task.completed;
                return task;
            })
        );
    };

    const handleRemoveTask = (id: string) => {
        setTodos(todos.filter((task) => task.id !== id));
    };

    const handleSearch = (query: string) => {
        setQuery(query);
    };

    return (
        <div className="h-screen text-center text-lg pt-10 bg-blue-200">
            <div className="w-3/4 bg-blue-400 mx-auto rounded py-2">
                <h2 className="text-white py-3 uppercase text-2xl">Todo App</h2>
                <SearchTask handleSearch={handleSearch} />
                <TaskList
                    todos={todos}
                    handleCompleteTask={handleCompleteTask}
                    handleRemoveTask={handleRemoveTask}
                    setTodos={setTodos}
                    query={query}
                />
                <AddTask handleAddTask={handleAddTask} />
            </div>
        </div>
    );
};

export default App;
