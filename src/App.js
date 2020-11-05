import React, {useState} from 'react';
import classes from './App.module.scss'
import Button from './UI/Button/Button';
import Popup from './Popup/Popup';

const App = () => {

    const [isShown, setShow] = useState(false);

    const handlerClick = () => {
        setShow(!isShown)
    };

    const cls = [classes.App];
    return (
        <div className={cls.join(' ')}>
            <Button
                message={'Налоговый вычет'}
                onClick={() => handlerClick()}
                cls={'ButtonMain'}
            />

            <Popup
                cls={isShown? 'isShown' : ''}
                onClick={() => handlerClick()}
            />
        </div>
    );
};

export default App;