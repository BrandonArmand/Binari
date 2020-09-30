export function commitAdd(arr) {
    return arr.reduce((a, b) => {
        return (typeof a.a != "undefined" ? a.a : a) + b.a;
    });
}

export function commitDel(arr) {
    return arr.reduce((a, b) => {
        return (typeof a.d != "undefined" ? a.d : a) + b.d;
    });
}

export function showDetail(val) {
    return [0, null, undefined].includes(val) ? null : true;
}