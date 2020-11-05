import React, {useState} from 'react';
import classes from './Form.module.scss'
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import is from "is_js";
import Selection from "./Selection/Selection";
import Calculate from "./Calculate/Calculate";

const Form = () => {
    const cls = [classes.Form];

    const [valueInput, setValueInput] = useState('');
    const [emptyInputState, setEmptyInputState] = useState(false);
    const [salary, setSalary] = useState(null);
    const [salaryTrigger, setSalaryTrigger] = useState(false);

    const isInputEmpty = (value) => is.empty(value) || value === ' ₽' || value === ' ';

    const regexpSpace = /(\d)(?=(\d{3})+([^\d]|$))/g;

    const onInputKeyPress = (e) => {
        if (e.key.length > 1) return true;
        e.target.value = (e.target.value+e.key)
                .replace(/\D/g, '')
                .replace(regexpSpace, '$1 ')
            +' ₽';

        e.preventDefault();
        setValueInput(e.target.value);
    };

    const onInputKeyUp = (e) => {
        setSalary(parseInt(e.target.value.replace(/\s/g, '')), 10);
        setEmptyInputState(isInputEmpty(e.target.value));
    };

    const addSpaces = (num) => Math.trunc(num).toString().replace(regexpSpace, '$1 ');

    const calcTax = (salary) => {
        let MAX_TAX = 260000;
        const taxPerYear = (salary * 12) * 0.13;
        let arr = [];

        if ((MAX_TAX - taxPerYear) <= 0) {
            arr.push(addSpaces(MAX_TAX));
        } else {
            while (MAX_TAX > 0) {
                if (MAX_TAX >= taxPerYear) {
                    arr.push(addSpaces(taxPerYear));
                } else {
                    arr.push(addSpaces(MAX_TAX));
                }

                MAX_TAX = MAX_TAX - taxPerYear;
            }
        }
        return arr;
    };

    const [subTaxPerYears, setSubTaxPerYears] = useState([]);

    const onCalcButtonClick = () => {
        if (salary) {
            setSalaryTrigger(true);
            setSubTaxPerYears(calcTax(salary));

        } else {
            setSalaryTrigger(false);
        }

    };

    return (
        <form
            className={cls.join(' ')}
            action=''
        >
            <Input
                label={'Ваша зарплата в месяц'}
                placeholder={'Введите данные'}
                required={true}
                defaultValue={valueInput}
                onKeyPress={onInputKeyPress}
                onKeyUp={onInputKeyUp}
                isEmptyState={emptyInputState}
                cls={'salary'}
            />
            <Button
                cls={'calc'}
                onClick={() => onCalcButtonClick()}
                message={'Рассчитать'}
            />

            {salaryTrigger
                ?   <Calculate
                        subTaxPerYears={subTaxPerYears}
                    />
                :   null
            }

            <Selection />
            <Button
                cls={'add'}
                type={'submit'}
                message={'Добавить'}
            />
        </form>
    );
};

export default Form;