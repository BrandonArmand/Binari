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
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  gigiCardHeader: {
    background: 'linear-gradient(315deg, #fc5296 0%,#f67062)',
  },
  brandonCardHeader: {
    background: 'linear-gradient(315deg, #63a4ff 0%,#83eaf1)'
  },
  defaultCardHeader :{
    background: 'linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)'
  }
};

export default cardHeaderStyle;
