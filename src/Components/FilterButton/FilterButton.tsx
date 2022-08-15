import React, {useEffect} from 'react';
import styles from './FilterButton.module.css'

interface IFilterButtonProps extends React.HTMLProps<HTMLButtonElement>{
    handleClick: (text: string) => void,
}

const FilterButton: React.FC<IFilterButtonProps> = ({handleClick, children}) => {

    return (
        <button
            onClick={() => handleClick(String(children))}
        >
            {children}
        </button>
    )
}

export {
    FilterButton
}