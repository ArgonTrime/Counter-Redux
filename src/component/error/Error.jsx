import React from 'react';
import s from '../../App.module.css';

const Error = (props) => {
    return (
        <div className={s.boxError}>
            <p>{props.errorMessage}</p>
            <button onClick={props.returnCount}>Return</button>
        </div>
    );
};

export default Error;