import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  infoSection: {
    marginTop: "20px",
    marginBottom: "50px"
  },
  videoTitle: {
    ...title,
    marginTop: "10px",
    overflowWrap: "break-word",
    marginLeft: "20px"
  },
  videoDescription: {
    color: "#999",
    textAlign: "left",
    marginLeft: "30px"
  }
};

export default productStyle;
