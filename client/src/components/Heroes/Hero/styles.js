import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "80%",
    backgroundPosition: "50% 0%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "flex-end",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
});
