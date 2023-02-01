import React from 'react';
import { FcSearch } from 'react-icons/fc';

interface Props {
    handleSearch: (query: string) => void;
}

export const SearchTask: React.FC<Props> = ({ handleSearch }) => {
    return (
        <div className="px-2 flex items-center relative">
            <FcSearch className="absolute left-4" />
            <input
                className="rounded pl-8 pr-2 py-1 w-full outline-sky-500"
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search"
            />
        </div>
    );
};
