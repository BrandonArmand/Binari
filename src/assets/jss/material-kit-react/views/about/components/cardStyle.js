import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

export const styles = {
    cardTitle: {
        marginTop: "0",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
    cardImg: {
        maxWidth: "200px",
        maxHeight: "200px",
        width: "200px",
        height: "200px",
        minWidth: "200px",
        minHeight: "200px",
        background: "grey",
    },
    cardHeader: {
        display: "flex",
    },
    card: {
        width: "400px",
    },
    info: {
        display: "flex",
        justifyContent: "flex-start",
        padding: "12px 30px",
        color: "white",
    },
    wrapper: {
        width: "100%",
    },
    icon: {
        marginRight: "10px",
        marginTop: "2px",
    },
    ...tooltip,
};
