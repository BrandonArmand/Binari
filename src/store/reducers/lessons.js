import { js } from "js-beautify";
import { SET_PAGE, SAVE_CODE, RESET_CODE } from "../actions/actionTypes";
import chapter from "../../views/Playground/chapters";

const beautify = js;
const initialState = {
    page: 0,
    currentCode: beautify(chapter[0].defaultCode),
};

export default (state = initialState, action) => {
    const { type, payload, } = action;

    switch (type) {
    case SET_PAGE:
        return {
            page: payload.page,
            currentCode: beautify(chapter[payload.page].defaultCode),
        };

    case SAVE_CODE:
        return { ...state, currentCode: payload.code, };

    case RESET_CODE:
        return { ...state, currentCode: beautify(chapter[payload.page].defaultCode), };

    default:
        return state;
    }
}
