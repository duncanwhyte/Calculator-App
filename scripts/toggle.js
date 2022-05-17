// SELECTORS
const mainBackground = document.querySelector(".container-theme__1");
const togglerThemeContainer = document.querySelector(".theme-1-toggle__container");
const toggler = document.querySelector(".toggler-theme__1");
const themeButtons = document.querySelectorAll(".theme-button");
const calculatorResultDisplay = document.querySelector(".result-display__1");
const calculatorCurrentResult = document.querySelector(".current-result__1");
const keyboardPad = document.querySelector(".keyboard-theme__1");
const keyboardNumberButtons = document.querySelectorAll(".theme-1__buttons");
const keyboardOperationButtons = document.querySelectorAll(".theme-1-operation__buttons");
const deleteButton = document.querySelector(".theme-1-delete__button");
const resetButton = document.querySelector(".theme-1-reset__button");
const calculateButton = document.querySelector(".theme-1-equals__button");

// THEME BUTTON IDS
const THEME_1_ID = "theme-1__button";
const THEME_2_ID = "theme-2__button";
const THEME_3_ID = "theme-3__button";

themeButtons.forEach(themeButton => {
    addEventListener("click", (e) => {
        let button = e.target.id;
        switch (button) {
            case THEME_1_ID:
                themeChange(theme_1_classNames);
                break;
            case THEME_2_ID:
                themeChange(theme_2_classNames);
                break;
            case THEME_3_ID:
                themeChange(theme_3_classNames);
                break;
            default: return;
        }
    })
});

const theme_1_classNames = {
    mainBackground: "container-theme__1",
    togglerThemeContainer: "theme-1-toggle__container",
    toggler: "toggler-theme__1",
    calculatorResultDisplay: "result-display__1",
    calculatorCurrentResult: "current-result__1",
    keyboardPad: "keyboard-theme__1",
    keyboardNumberButtons: "theme-1__buttons",
    keyboardOperationButtons: "theme-1-operation__buttons",
    deleteButton: "theme-1-delete__button",
    resetButton: "theme-1-reset__button",
    calculateButton: "theme-1-equals__button"
}
const theme_2_classNames = {
    mainBackground: "container-theme__2",
    togglerThemeContainer: "theme-2-toggle__container",
    toggler: "toggler-theme__2",
    calculatorResultDisplay: "result-display__2",
    calculatorCurrentResult: "current-result__2",
    keyboardPad: "keyboard-theme__2",
    keyboardNumberButtons: "theme-2__buttons",
    keyboardOperationButtons: "theme-2-operation__buttons",
    deleteButton: "theme-2-delete__button",
    resetButton: "theme-2-reset__button",
    calculateButton: "theme-2-equals__button"
}
const theme_3_classNames = {
    mainBackground: "container-theme__3",
    togglerThemeContainer: "theme-3-toggle__container",
    toggler: "toggler-theme__3",
    calculatorResultDisplay: "result-display__3",
    calculatorCurrentResult: "current-result__3",
    keyboardPad: "keyboard-theme__3",
    keyboardNumberButtons: "theme-3__buttons",
    keyboardOperationButtons: "theme-3-operation__buttons",
    deleteButton: "theme-3-delete__button",
    resetButton: "theme-3-reset__button",
    calculateButton: "theme-3-equals__button"
}

const themeChange = (theme) => {
    mainBackground.className = theme.mainBackground;
    togglerThemeContainer.className = theme.togglerThemeContainer;
    toggler.className = theme.toggler;
    calculatorResultDisplay.className = theme.calculatorResultDisplay;
    calculatorCurrentResult.className = theme.calculatorCurrentResult;
    keyboardPad.className = theme.keyboardPad;
    for (i = 0; i < keyboardNumberButtons.length; i++) {
        keyboardNumberButtons[i].className = theme.keyboardNumberButtons
    };
    for (i = 0; i < keyboardOperationButtons.length; i++) {
        keyboardOperationButtons[i].className = theme.keyboardOperationButtons
    };
    deleteButton.className = theme.deleteButton;
    resetButton.className = theme.resetButton;
    calculateButton.className = theme.calculateButton;
}