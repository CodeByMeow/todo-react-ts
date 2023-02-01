import React, { useRef, useState } from 'react';

interface Props {
    handleAddTask: (task: string) => void;
}

export const AddTask: React.FC<Props> = ({ handleAddTask }) => {
    const [input, setInput] = useState<string>();
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInputChange: React.ChangeEventHandler<
        HTMLInputElement
    > = () => {
        if (inputRef.current) {
            setInput(inputRef.current.value);
        }
    };
    const handleClickAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
        handleAddTask(input!);
        setInput('');
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    return (
        <div className="flex justify-center gap-2 px-2">
            <input
                ref={inputRef}
                type="text"
                onChange={handleInputChange}
                className="rounded px-2 py-1 w-3/4 outline-sky-500"
            />
            <button
                className="text-lg bg-sky-800 rounded px-1 text-white w-1/4 uppercase"
                onClick={handleClickAdd}
            >
                +
            </button>
        </div>
    );
};
