import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  brandLogo: {
    marginRight: "15px",
  },
  heading: {
    color: "black",
    textDecoration: "none",
    fontSize: "2em",
    fontWeight: "700",
  },
  ginTop: "5px",
}));
