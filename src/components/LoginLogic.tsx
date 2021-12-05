import { Grid, IconButton, Toolbar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../logos/logo.png";
import { Typography, AppBar } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { auth } from "../firebaseSetup";
import React from "react";
import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { width } from "@mui/system";

//defining the styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderRadius: 20,
    padding: "0.25rem 2rem",
  },
  logo: {
    height: "15%",
    width: "15%",
    alignContent: "center",
    justify: "center",
  },
  toolbar: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    backgroundColor: "#ffffff",
  },
  form: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },

  textfield: {
    width: 300,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export interface State extends SnackbarOrigin {
  open: boolean;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

//creating the primary and secondary theme with our colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#EE6C4D",
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

//export function that handles everything login, checks for validity, shows error/sucess and email refs etc
export const LoginLogic = () => {
  const classes = useStyles();
  const history = useHistory();

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [submitDisabled, setSubmitDisabled] = React.useState(false);
  const [email1, setEmail] = React.useState("");

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleError = () => {
    setSubmitDisabled(true);
  };

  const handleClose = () => {
    setState({ ...state, open: false });
    setOpen(false);
    setOpen1(false);
  };

  const handleEmailInput = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEmail(event.target.value as string);
    checkValidity();
  };

  function validity() {
    if (emailRef.current!.value.includes("@kzoo.edu")) {
      signIn();
      handleToggle();
      handleClick({ vertical: "top", horizontal: "center" });
    } else {
      //handleClickOpen();
      handleError();
    }
  }

  function isMobile() {
    var mobileCompsStyle = {
      margin: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "60%",
      height: "auto",
      width: "auto",
    };

    var screenCompsStyle = {
      margin: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "25%",
      height: "auto",
      width: "auto",
    };
    if (window.screen.width < 600) {
      return mobileCompsStyle;
    } else {
      return screenCompsStyle;
    }
  }
  function checkValidity() {
    if (emailRef.current!.value !== "") {
      setSubmitDisabled(false);
    }
  }

  const buttons = (
    <Button
      size="large"
      variant="outlined"
      color="primary"
      className={classes.button}
      disabled={submitDisabled}
      onClick={() => {
        validity();
      }}
    >
      Get Login Link
    </Button>
  );

  const handleToggle = () => {
    setOpen(!open);
  };

  //enter key check
  const handleKeyPress = (event: any) => {
    event.preventDefault();
    if (event.which === 13 || event.key === "Enter" || event.key === "Go") {
      validity();
    }
  };

  // firebaseItems
  //getting the email data from the text field
  let emailRef = useRef<HTMLInputElement>(null);
  var actionCodeSettings = {
    url: "https://kaglet.app/login",
    handleCodeInApp: true,
  };

  const signIn = async () => {
    try {
      await auth.sendSignInLinkToEmail(
        emailRef.current!.value,
        actionCodeSettings
      );
      window.localStorage.setItem("emailForSignIn", emailRef.current!.value);
    } catch (error) {
      console.error(error);
    }
  };

  //firebase login items
  try {
    if (auth.isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
        redirectToHomepage();
        return <div>Try again in a non-private window.</div>;
      } else {
        auth
          .signInWithEmailLink(email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("emailForSignIn");
            redirectToHomepage();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  } catch (error) {
    console.error(error);
  }

  // //this will be called later.
  // const signOut = async () => {
  //   await auth.signOut();
  // };

  //redirects if the user is already logged in
  function redirectToHomepage() {
    window.location.href = "https://kaglet.app/home";
  }

  //firebase-ends

  return (
    <div className={classes.root}>
      <Typography component="div" align="center" style={{ height: "100vh" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <img alt="Logo" style={isMobile()} src={logo} />
          </Grid>

          <Grid item>
            <TextField
              id="outlined-basic"
              label="Email"
              //helperText="Incorrect entry."
              error={submitDisabled}
              required
              color="secondary"
              variant="outlined"
              placeholder="@kzoo.edu"
              inputRef={emailRef}
              className={classes.textfield}
              helperText="Please use your @kzoo.edu school email."
              // onKeyPress={handleKeyPress}
              onChange={handleEmailInput}
            />
          </Grid>
          <Grid item>{buttons}</Grid>
        </Grid>
        <div>
          <Grid item alignContent="center">
            <Snackbar
              //autoHideDuration={100000000}
              anchorOrigin={{ vertical: "top", horizontal }}
              open={open}
              onClose={handleClose}
              message="Link successfully sent"
              key={vertical + horizontal}
            >
              <Alert onClose={handleClose} severity="success">
                Check your email! 🤪
              </Alert>
            </Snackbar>
            <Backdrop
              className={classes.backdrop}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </Grid>
        </div>
      </Typography>
      {/* </Grid> */}
    </div>
  );
};
