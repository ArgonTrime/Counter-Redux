import React from 'react';
import s from './App.module.css';
import Counter from "./component/counter/Counter";
import CounterSettings from "./component/counterSettings/CounterSettings";
import Error from "./component/error/Error";
import {connect} from "react-redux";

class App extends React.Component {

    state = {
        number: 0,
        maxLimit: 5,
        maxLimitInput: null,
        startCountInput: null,
        lowLimit: 0,
        errorMessage: '',
        isActiveBlockCounter: true,
        isActiveBlockSettings: false,
        isCounterBlockButtonsActive: false,
        isSettingsBlockButtonsActive: true,
        isInputErrorMaxValue: false,
        isInputErrorStartValue: false
    };

    /* metods for Counter, Error*/
    addNumber = () => {
        if (this.state.number < this.state.maxLimit) {
            this.setState({
                number: ++this.state.number,
                errorMessage: ''
            })
        } else {
            this.setState({
                errorMessage: `Max limit count ${this.state.maxLimit}`
            })
        }
    };
    resetNumber = () => {
        if (this.state.startCountInput !== null) {
            this.setState({
                number: this.state.startCountInput
            })
        } else {
            this.setState({
                number: 0
            })
        }
    };

    returnCount = () => {
        this.setState({
            errorMessage: '',
            number: this.state.number
        })
    };


    // logic setting click
    setSettings = () => {
        this.setState({
            isCounterBlockButtonsActive: false,
            isSettingsBlockButtonsActive: true,
            isActiveBlockCounter: true,
            isActiveBlockSettings: false

        });
        this.maximumMoreStarting();
        this.startingLessMaximum();
        this.maximumEqualStartingValue();
    };

    maximumMoreStarting = () => {
        if (this.state.maxLimitInput > this.state.startCountInput) {
            if (this.state.maxLimitInput !== null) {
                this.setState({
                    maxLimit: this.state.maxLimitInput,
                })
            }
        } else {
            this.setState({
                errorMessage: 'Set correct maximum value'
            })
        }
    };
    startingLessMaximum = () => {
        if (this.state.startCountInput < this.state.maxLimitInput) {
            if (this.state.startCountInput !== null) {
                this.setState({
                    number: this.state.startCountInput,
                })
            }
        } else {
            this.setState({
                errorMessage: 'Set correct start value'
            })
        }
    };
    maximumEqualStartingValue = () => {
        if (this.state.maxLimitInput === this.state.startCountInput) {
            this.setState({
                errorMessage: 'Set correct start value'
            })
        }
    };




    setValues = () => {
        this.setState({
            isActiveBlockCounter: false,
            isActiveBlockSettings: true,
            isCounterBlockButtonsActive: true,
            isSettingsBlockButtonsActive: false
        })
    };
    setCorrectValue = () => {
        this.setState({
            isCounterBlockButtonsActive: true,
            isSettingsBlockButtonsActive: true,
            isInputErrorMaxValue: true,
            isInputErrorStartValue: true,
            errorMessage: 'Set correct value'
        })

    };


    setMax = (e) => {
        if (e.target.value < this.state.startCountInput) {
            this.setState({
                isCounterBlockButtonsActive: true,
                isSettingsBlockButtonsActive: true,
                isInputErrorMaxValue: true,
                errorMessage: 'Set correct value'
            })
        } else if(e.target.value === this.state.startCountInput) {
            this.setCorrectValue();
            this.setState({
                maxLimitInput: e.target.value
            })
        } else {
            this.setState({
                maxLimitInput: e.target.value,
                isInputErrorMaxValue: false,
                isInputErrorStartValue: false,
                errorMessage: ''
            });
            this.setValues()
        }

    };

    setStart = (e) => {
        if (e.target.value > this.state.maxLimitInput) {
            this.setState({
                isCounterBlockButtonsActive: true,
                isSettingsBlockButtonsActive: true,
                isInputErrorStartValue: true,
                errorMessage: 'Set correct value'
            })
        } else if(e.target.value === this.state.maxLimitInput) {
            this.setCorrectValue();
            this.setState({
                startCountInput: e.target.value
            })
        } else {
            this.setState({
                startCountInput: e.target.value,
                isInputErrorStartValue: false,
                isInputErrorMaxValue: false,
                errorMessage: ''
            });
            this.setValues()
        }


    };


    render() {
        return (
            <div className={s.container}>
                {this.state.errorMessage === ''
                    ? <Counter number={this.state.number}
                               isActiveBlockCounter={this.state.isActiveBlockCounter}
                               isCounterBlockButtonsActive={this.state.isCounterBlockButtonsActive}
                               isSettingsBlockButtonsActive={this.state.isSettingsBlockButtonsActive}
                               addNumber={this.addNumber}
                               resetNumber={this.resetNumber}/>
                    : <Error errorMessage={this.state.errorMessage}
                             returnCount={this.returnCount}
                             number={this.state.number}/>}

                <CounterSettings isActiveBlockSettings={this.state.isActiveBlockSettings}
                                 isCounterBlockButtonsActive={this.state.isCounterBlockButtonsActive}
                                 isSettingsBlockButtonsActive={this.state.isSettingsBlockButtonsActive}
                                 setSettings={this.setSettings}
                                 isInputErrorMaxValue={this.state.isInputErrorMaxValue}
                                 isInputErrorStartValue={this.state.isInputErrorStartValue}
                                 setMax={this.setMax}
                                 setStart={this.setStart}/>
            </div>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

export default connect(mapStateToProps, {})(App);