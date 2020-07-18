import { js } from "js-beautify";
import { SET_PAGE, SAVE_CODE, RESET_CODE } from "../actions/actionTypes";
import chapters from "../../views/Playground/chapters";

const beautify = js;

/*
initialState example:
{
    page: 0,
    currentCode: {
        0: "code",
        1: null,
        2: null
        ...
    }
}
 */
const initialPage = 0;
const initialState = {
    page: initialPage,
    currentCode: chapters.reduce((currentCode, chapter, page) => {
        currentCode[page] = page === initialPage ?
            beautify(chapters[page].defaultCode)
            : null;
        return currentCode;
    }, {}),
};

export default (state = initialState, action) => {
    const { type, payload, } = action;

    switch (type) {
    case SET_PAGE:
        return {
            page: payload.page,
            currentCode: {
                ...state.currentCode,
                [payload.page]: state.currentCode[payload.page] === null ?
                    beautify(chapters[payload.page].defaultCode) :
                    state.currentCode[payload.page],
            },
        };

    case SAVE_CODE:
        return {
            ...state, currentCode: {
                ...state.currentCode,
                [state.page]: payload.code,
            },
        };

    case RESET_CODE:
        return {
            ...state, currentCode: {
                ...state.currentCode,
                [state.page]: beautify(chapters[state.page].defaultCode),
            },
        };

    default:
        return state;
    }
}
