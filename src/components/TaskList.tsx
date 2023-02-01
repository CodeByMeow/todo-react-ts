import React, { useCallback } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { ITask, TaskItem } from './TaskItem';

interface Props {
    todos: ITask[];
    handleCompleteTask: (id: string) => void;
    handleRemoveTask: (id: string) => void;
    setTodos: (todos: ITask[]) => void;
    query: string;
}

export const TaskList: React.FC<Props> = ({
    todos,
    handleCompleteTask,
    handleRemoveTask,
    setTodos,
    query,
}) => {
    const onDragEnd = useCallback(
        (result: any) => {
            if (!result.destination) return;
            const [desIndex, srcIndex] = [
                result.destination.index,
                result.source.index,
            ];
            if (desIndex === srcIndex) return;
            const _todos = [...todos];
            [_todos[desIndex], _todos[srcIndex]] = [
                _todos[srcIndex],
                _todos[desIndex],
            ];
            setTodos(_todos);
        },
        [todos]
    );
    const taskList = todos
        .filter((task) =>
            task.content.toLowerCase().includes(query.toLowerCase())
        )
        .map((task, idx) => {
            return (
                <TaskItem
                    task={task}
                    handleCompleteTask={handleCompleteTask}
                    handleRemoveTask={handleRemoveTask}
                    key={task.id}
                    index={idx}
                />
            );
        });

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="todo-list">
                {(provided) => (
                    <div
                        className="p-2"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {taskList}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};
