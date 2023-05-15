import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
    section: {
        padding: "70px 0",
        textAlign: "center",
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
    },
    description: {
        color: "#333",
        fontSize: "1.0625rem",
        lineHeight: "1.55em",
    },
    infoSection: {
        marginTop: "20px",
        marginBottom: "50px",
    },
    videoTitle: {
        ...title,
        marginTop: "10px",
        overflowWrap: "break-word",
        marginLeft: "20px",
    },
    videoDescription: {
        color: "#333",
        textAlign: "left",
        marginLeft: "30px",
        fontSize: "1.0625rem",
        lineHeight: "1.55em",
    },
};

export default productStyle;
