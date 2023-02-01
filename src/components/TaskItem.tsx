import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { HiChevronUpDown } from 'react-icons/hi2';

export interface ITask {
    content: string;
    completed: boolean;
    id: string;
}

interface Props {
    task: ITask;
    handleCompleteTask: (id: string) => void;
    handleRemoveTask: (id: string) => void;
    index: number;
}

export const TaskItem: React.FC<Props> = ({
    task,
    handleCompleteTask,
    handleRemoveTask,
    index,
}) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    className="bg-gray-50 py-2 rounded text-lg flex cursor-pointer my-1 text-gray-700"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <p
                        className={
                            `flex-1 text-left px-2 flex gap-1 items-center` +
                            (task.completed
                                ? ' line-through text-gray-400'
                                : '')
                        }
                        onClick={() => handleCompleteTask(task.id)}
                    >
                        <HiChevronUpDown />
                        {task.content}
                    </p>
                    <span
                        className="text-2xl shink-0 px-1 text-gray-400"
                        onClick={() => handleRemoveTask(task.id)}
                    >
                        &times;
                    </span>
                </div>
            )}
        </Draggable>
    );
};
