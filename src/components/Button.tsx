import {useState} from 'react';

interface ButtonProps {
    color: string;
    children: string;
}

export function Button(props: ButtonProps) {

    return(
        <button type="button" style={{backgroundColor: props.color}}>
            {props.children} <strong>1</strong>
        </button>
    )
}