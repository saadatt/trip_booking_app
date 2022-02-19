import React, {useEffect, useState} from "react";
import './Counter.css';
import {findAllByDisplayValue, findAllByLabelText} from "@testing-library/react";

type Props = {
    title: string,
    onChange?: (state: number) => void,
    value: number
}

function Counter ({ title, onChange, value }: Props) {
    return <div className='counter'>
        <label>{title}</label>
        <div className='controls'>
    <input value={value} disabled />
    <div className='minus' onClick={() => onChange && onChange(value - 1)}><span>-</span></div>
    <div className='plus' onClick={() => onChange && onChange(value + 1)}><span>+</span></div>
    </div>
    </div>
}
export default Counter;