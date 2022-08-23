import React from 'react';
import styles from './FilterButton.module.css'

interface IFilterButtonProps extends React.HTMLProps<HTMLButtonElement>{
    handleClick: any,
    className: string
}

const FilterButton: React.FC<IFilterButtonProps> = ({handleClick, className, children}) => {


    return (
        <button
            className={className}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export {
    FilterButton
}