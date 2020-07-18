import { SET_PAGE, SAVE_CODE, RESET_CODE } from "./actionTypes";

export function setPage(page) {
    return {
        type: SET_PAGE,
        payload: { page, },
    };
}

export function saveCode(code) {
    return {
        type: SAVE_CODE,
        payload: { code, },
    };
}

export function resetCode() {
    return {
        type: RESET_CODE,
    };
}
