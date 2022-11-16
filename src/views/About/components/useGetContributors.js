import { useEffect, useState } from "react";

const useGetContributors = (url) => {
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        if (!url) return { contributors: [] };

        const fetchData = async () => {
            const apiHeaders = new Headers();
            apiHeaders.append(
                "Authorization",
                `Bearer ${process.env.REACT_APP_TOKEN}`
            );
            const reqOptions = {
                method: "GET",
                headers: apiHeaders,
                redirect: "follow",
            };
            const response = await fetch(url, reqOptions);
            const data = await response.json();
            setContributors(data);
        };

        fetchData();
    }, [url]);

    return { contributors };
};

export default useGetContributors;
