import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { PostButton } from "./PostButton";
import { Typography } from "@material-ui/core";
import { ToolbarAndChips } from "./ToolbarAndChips";
import { EventCardContainer } from "./EventCardContainer";
import firebase from "firebase";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import backdrop from "../logos/kagletplantsbackdrop.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  button: {
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    marginTop: theme.spacing(2),
    borderRadius: 20,
    padding: "0.25rem 2rem",
  },
  backdrop: {
    height: 500,
    width: 500,
    alignContent: "center",
    justify: "center",
    opacity: 0.3,
    position: "absolute",
    zIndex: -1,
    marginTop: 100
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF8C19",
      light: "#ff9b79",
      dark: "#b53a22",
    },
    secondary: {
      main: "#4C5760",
      light: "#78848d",
      dark: "#242e36",
    },
  },
});

//homescreen function which is checking if the user is logged in or not. If user, then set user id etc etc.
export const HomeScreen = () => {
  const [loggedInUserId, setLoggedInUserId] = useState("");
  useEffect(() => {
    const fetchIsLoggedIn = async () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setLoggedInUserId(user.uid);
          console.log(user.uid);
        } else {
          setLoggedInUserId("erin.murphy19@kzoo.edu");
        }
      });
    };
    fetchIsLoggedIn();
  }, [loggedInUserId]);
  const classes = useStyles();
  const history = useHistory();
  //return statement that contains the UI
  return (
    <div className={classes.root}>
      {/* only shows this if the user is logged in (it should contain something in the string if it exists) */}
      {loggedInUserId === "" && (
        //Grid holding all elements in the homescreen UI
        <Grid container direction="column" justifyContent="center">
          <Typography
            component="div"
            align="center"
            style={{ height: "100vh" }}
          >
            {/* Toolbar component being imported from the other screen */}
            <ToolbarAndChips />
            &nbsp;
            <Grid
              container
              spacing={2}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Typography variant="h5">
                Please log in to view awesome K events!
              </Typography>
              &nbsp;
              <Typography variant="h6">
                If you've logged in, try again in a non-private window.
              </Typography>
              &nbsp;
              <ThemeProvider theme={theme}>
                <Grid item>
                  <Button
                    size="large"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    onClick={() => history.push("/login")}
                  >
                    Login
                  </Button>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Typography>
        </Grid>
      )}

      {/* otherwise, if it's not an empty string, it should print this. All tags are self-explantory (from Material UI) */}
      {loggedInUserId !== "" && (
        <Grid container direction="column" justifyContent="center">
          <Typography
            component="div"
            align="center"
            style={{ height: "100vh" }}
          >
            <ToolbarAndChips />
            &nbsp;
            <Grid
              container
              spacing={2}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <img alt="Backdrop" className={classes.backdrop} src={backdrop}/>
              <EventCardContainer/>
            </Grid>
            <Grid item>
              <PostButton />
            </Grid>
          </Typography>
        </Grid>
      )}
    </div>
  );
};
