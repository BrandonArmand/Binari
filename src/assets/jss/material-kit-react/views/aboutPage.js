import { container, title } from "assets/jss/material-kit-react.js";

const aboutPageStyle = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        ...container,
    },
    title: {
        ...title,
        display: "inline-block",
        marginTop: "70px",
        marginBottom: "50px",
        minHeight: "32px",
        color: "#333",
        textDecoration: "none",
        width: "100%",
    },
    subtitle: {
        marginTop: "-20px",
        fontSize: "1.313rem",
        color: "#333",
    },
    listTitle: {
        marginBottom: "50px",
        fontSize: "1.313rem",
        color: "#333",
    },
    description: {
        color: "#999",
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
    },
    mainRaised: {
        margin: "-550px 30px 0px",
        borderRadius: "6px",
        boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    footer: {
        marginBottom: "50px",
    },
};

export default aboutPageStyle;
