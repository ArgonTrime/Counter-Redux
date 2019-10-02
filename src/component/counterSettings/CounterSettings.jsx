import React from 'react';
import s from '../../App.module.css';


const CounterSettings = (props) => {

    return (
        <div className={props.isActiveBlockSettings ? s.active : ''}>
            <div className={s.boxSettings}>
                <div>CounterSettings</div>
                <div><input className={props.isInputErrorMaxValue ? s.inputError : ''}  type='number' min='0' max='100' onChange={props.setMax}/>Set maximum value</div>
                <div><input className={props.isInputErrorStartValue ? s.inputError : ''} type='number' min='0' max='100' onChange={props.setStart}/>Set starting value</div>
                <button onClick={props.setSettings}
                        className={props.isSettingsBlockButtonsActive ? s.setBtnDisabled : s.setBtn}
                        disabled={props.isSettingsBlockButtonsActive}
                >Set settings</button>
            </div>
        </div>
    );
};

export default CounterSettings;