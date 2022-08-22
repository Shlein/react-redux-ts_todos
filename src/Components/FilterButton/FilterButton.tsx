import React from 'react';

interface IFilterButtonProps extends React.HTMLProps<HTMLButtonElement>{
    handleClick: any,
}

const FilterButton: React.FC<IFilterButtonProps> = ({handleClick, children}) => {


    return (
        <button
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export {
    FilterButton
}