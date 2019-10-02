import React from 'react';
import s from '../../App.module.css';

const Counter = (props) => {
    return (
        <div className={props.isActiveBlockCounter ? s.active : ''}>
            <div className={s.boxCounter}>
                <h1>{props.number}</h1>
                <button onClick={props.addNumber}
                        className={props.isCounterBlockButtonsActive ? s.setBtnDisabled : s.addBtn}
                        disabled={props.isCounterBlockButtonsActive}>Set
                </button>

                <button onClick={props.resetNumber}
                        disabled={props.isCounterBlockButtonsActive}
                        className={props.isCounterBlockButtonsActive ? s.setBtnDisabled : s.deleteBtn}>Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;