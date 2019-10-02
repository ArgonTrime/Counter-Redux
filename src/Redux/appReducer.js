const ADD_NUMBER = 'ADD_NUMBER';
const RESET_NUMBER = 'RESET_NUMBER';
const RETURN_COUNT = 'RETURN_COUNT';
const SET_MAX = 'SET_MAX';
const SET_START = 'SET_START';
const SET_SETTINGS = 'SET_SETTINGS';

let initialState = {
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

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            if (state.number < state.maxLimit) {
                return {...state, number: ++state.number};
            }
            return {...state, errorMessage: `Max limit count ${state.maxLimit}`};
        case RESET_NUMBER:
            if (state.startCountInput !== null) {
                return {...state, number: state.startCountInput};
            }
            return {...state, number: 0};
        case RETURN_COUNT:
            return {...state, errorMessage: '', number: state.number};


        case SET_MAX:
            if (action.e.target.value < state.startCountInput) {
                return {
                    ...state,
                    isCounterBlockButtonsActive: true,
                    isSettingsBlockButtonsActive: true,
                    isInputErrorMaxValue: true,
                    errorMessage: 'Set correct value'
                }
            } else if (action.e.target.value === state.startCountInput) {
                return {
                    ...state,
                    isCounterBlockButtonsActive: true,
                    isSettingsBlockButtonsActive: true,
                    isInputErrorMaxValue: true,
                    isInputErrorStartValue: true,
                    errorMessage: 'Set correct value',
                    maxLimitInput: action.e.target.value
                }
            } else {
                return {
                    ...state,
                    maxLimitInput: action.e.target.value,
                    isInputErrorMaxValue: false,
                    isInputErrorStartValue: false,
                    errorMessage: '',
                    isActiveBlockCounter: false,
                    isActiveBlockSettings: true,
                    isCounterBlockButtonsActive: true,
                    isSettingsBlockButtonsActive: false
                }
            }


        case SET_START:
            if (action.e.target.value > state.maxLimitInput) {
                return {
                    ...state,
                    isCounterBlockButtonsActive: true,
                    isSettingsBlockButtonsActive: true,
                    isInputErrorStartValue: true,
                    errorMessage: 'Set correct value'
                }
            } else if (action.e.target.value === state.maxLimitInput) {
                return {
                    ...state,
                    isCounterBlockButtonsActive: true,
                    isSettingsBlockButtonsActive: true,
                    isInputErrorMaxValue: true,
                    isInputErrorStartValue: true,
                    errorMessage: 'Set correct value',
                    startCountInput: action.e.target.value
                }
            } else {
                return {
                    ...state,
                    startCountInput: action.e.target.value,
                    isInputErrorStartValue: false,
                    isInputErrorMaxValue: false,
                    errorMessage: '',
                    isActiveBlockCounter: false,
                    isActiveBlockSettings: true,
                    isCounterBlockButtonsActive: true,
                    isSettingsBlockButtonsActive: false
                }
            }


        case SET_SETTINGS:
            if (state.maxLimitInput > state.startCountInput) {
                if (state.maxLimitInput !== null) {
                    return {
                        ...state,
                        maxLimit: state.maxLimitInput,
                        isCounterBlockButtonsActive: false,
                        isSettingsBlockButtonsActive: true,
                        isActiveBlockCounter: true,
                        isActiveBlockSettings: false,
                    }
                }
            } else {
                return {
                    ...state,
                    errorMessage: 'Set correct maximum value',
                    isCounterBlockButtonsActive: false,
                    isSettingsBlockButtonsActive: true,
                    isActiveBlockCounter: true,
                    isActiveBlockSettings: false,
                }
            }

            if (state.startCountInput < state.maxLimitInput) {
                if (state.startCountInput !== null) {
                    return {
                        ...state,
                        number: state.startCountInput,
                        isCounterBlockButtonsActive: false,
                        isSettingsBlockButtonsActive: true,
                        isActiveBlockCounter: true,
                        isActiveBlockSettings: false,
                    }
                }
            } else {
                return {
                    ...state,
                    errorMessage: 'Set correct start value',
                    isCounterBlockButtonsActive: false,
                    isSettingsBlockButtonsActive: true,
                    isActiveBlockCounter: true,
                    isActiveBlockSettings: false,
                }
            }

            if (state.maxLimitInput === state.startCountInput) {
                return {
                    ...state,
                    errorMessage: 'Set correct start value',
                    isCounterBlockButtonsActive: false,
                    isSettingsBlockButtonsActive: true,
                    isActiveBlockCounter: true,
                    isActiveBlockSettings: false,
                }
            }
        default:
            return state;

    }
};
export const addNumber = () => ({type: ADD_NUMBER});
export const resetNumber = () => ({type: RESET_NUMBER});
export const returnCount = () => ({type: RETURN_COUNT});
export const setMax = (e) => ({type: SET_MAX, e});
export const setStart = (e) => ({type: SET_START, e});
export const setSettings = () => ({type: SET_SETTINGS});
export default appReducer;