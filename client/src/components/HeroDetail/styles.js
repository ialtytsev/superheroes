import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 3,
  },
  realName: {
    fontSize: "26px",
  },
  imageSection: {
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: "20px",
    flex: 2,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    maxWidth: "100%",
    maxHeight: "600px",
  },
}));
