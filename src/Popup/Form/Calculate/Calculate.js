import React from 'react';
import classes from './Calculate.module.scss'
import Input from "../../../UI/Input/Input";

const Calculate = (props) => {
    const cls = [classes.Calculate];
    const text = (subTaxPerYear, i) => (<span className={classes.taxValue}>{subTaxPerYear + ' рублей'}<span> в {i+1}-ый год</span></span>) ;

    return (
        <div className={cls.join(' ')}>
            <p>Итого можете внести  в качестве досрочных:</p>
            {props.subTaxPerYears.map(
                (subTaxPerYear, i) => (
                        <Input
                            type={'checkbox'}
                            key={i}
                            cls={'subtax'}
                            label={text(subTaxPerYear, i)}
                            name={'subtax'}
                            value={subTaxPerYear}
                        />
                    )
                )
            }
        </div>
    );
};

export default Calculate;