import classes from './Input.module.scss';
import React from 'react';

const Input = props => {
    const inputType = props.type || 'text';
    const htmlFor = `${inputType}-${Math.random()}`;
    const cls = [classes.Input];
    cls.push(classes[props.cls]);

    if (props.isEmptyState) {
        cls.push(classes.invalid);
    }

    return (
        <div className={cls.join(' ')}>
            <input 
                id={htmlFor}
                type={inputType}
                name={props.name}
                value={props.value}
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
                onKeyPress={props.onKeyPress}
                onKeyUp={props.onKeyUp}
                required={props.required}
                defaultChecked={props.defaultChecked}
            />
            <label htmlFor={htmlFor}>{props.label}</label>
            {
                props.isEmptyState
                    ? <span>{'Поле обязательно для заполнения'}</span>
                    : null
            }
            
        </div>
    )
};

export default Input;