import React from 'react';
import classes from './Button.module.scss'

const Button = (props) => {
    const cls = [classes.Button];
    cls.push(classes[props.cls]);

    return (
        <button
            className={cls.join(' ')}
            onClick={props.onClick}
            type={props.type || 'button'}
        >{props.message}</button>
    );
};

export default Button;