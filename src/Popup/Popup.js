import React from 'react';
import classes from './Popup.module.scss'
import Button from "../UI/Button/Button";
import Form from "./Form/Form";
import Backdrop from "../UI/Backdrop/Backdrop";

const Popup = (props) => {
    const cls = [classes.Popup];
    cls.push(classes[props.cls]);

    return (
        <div className={cls.join(' ')}>
            <Backdrop
                onClick={props.onClick}
            />

            <div className={classes.wrapper}>
                <Button
                    onClick={props.onClick}
                    cls={'close'}
                />
                <h1 className={classes.title}>Налоговый вычет</h1>
                <p className={classes.abstract}>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
                <Form />
            </div>

        </div>
    );
};

export default Popup;