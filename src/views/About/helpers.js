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
    return val ? true : null;
}

export async function getContributors() {
    const apiHeaders = new Headers();
    apiHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_TOKEN}`);
    const reqOptions = {
        method: "GET",
        headers: apiHeaders,
        redirect: "follow",
    };
    let response = await fetch(
        "https://api.github.com/repos/brandonarmand/binari/stats/contributors",
        reqOptions
    );
    let dataJson = await response.json();
    return dataJson?.sort((a, b) => (a?.total < b?.total ? 1 : -1));
}
