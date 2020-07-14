import {
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader
} from "assets/jss/material-kit-react.js";
const cardHeaderStyle = {
    cardHeader: {
        borderRadius: "3px",
        padding: "1rem 15px",
        marginLeft: "15px",
        marginRight: "15px",
        marginTop: "-30px",
        border: "0",
        marginBottom: "0",
    },
    cardHeaderPlain: {
        marginLeft: "0px",
        marginRight: "0px",
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    gigiCardHeader: {
        background: "linear-gradient(315deg, #fc5296 0%,#f67062)",
        boxShadow: primaryCardHeader.boxShadow,
    },
    brandonCardHeader: {
        background: "linear-gradient(315deg, #63a4ff 0%,#83eaf1)",
        boxShadow: infoCardHeader.boxShadow,
    },
    defaultCardHeader: {
        background: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
        boxShadow: successCardHeader.boxShadow,
    },
};

export default cardHeaderStyle;
