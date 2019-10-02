

let initialState = {
    counter: {
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
    }
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

    }
};

export default appReducer;