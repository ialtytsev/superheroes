import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  pagination: {
    display: "flex",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
}));
