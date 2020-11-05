import React from 'react';
import classes from './Selection.module.scss'
import Input from "../../../UI/Input/Input";

const Selection = () => {
    const cls = [classes.Selection];

    return (
        <div className={cls.join(' ')}>
            <p>Что уменьшаем?</p>
            <div className={classes.buttons}>
                <Input
                    cls={'payless'}
                    type={'radio'}
                    name={'payless'}
                    value={'payment'}
                    label={'Платёж'}
                    defaultChecked={true}
                />
                <Input
                    cls={'payless'}
                    type={'radio'}
                    name={'payless'}
                    value={'time'}
                    label={'Срок'}
                />
            </div>
        </div>
    );
};

export default Selection;