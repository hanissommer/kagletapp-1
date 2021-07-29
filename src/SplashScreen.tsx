
import Container from '@material-ui/core/Container';
import { Typography, Card, AppBar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../src/logos/logo.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo:{
    height: 500,
    width: 500,
    alignContent: 'center',
  },
  button: {
      color: "red",
      marginTop: theme.spacing(20),
    },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    background : '#FFFFFF',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    color: "#000000"
  },
  field: {
      '& > *': {
        margin: theme.spacing(3),
        width: '25ch',
      }
  },
  secondText: { 
    margin: theme.spacing(1),
  },
}));

const App: React.FunctionComponent<{}> = props => {
  const classes = useStyles();
  
  return (
  <div className={classes.root}>
  <Container maxWidth="sm">
    <Card variant="outlined">
    <Typography component="div"  align='center' style={{ height: '100vh',}}>

    <div className="col-centeredd">

    <img alt="Logo" className={classes.logo} src={logo}/> 
         
    </div>  
      <Button size="large"
        variant = "outlined" 
        color="secondary"
        className={classes.button} >
        Sign Up
      </Button>

      <Typography variant="subtitle1" className={classes.secondText}>Or login</Typography>

  </Typography>
  </Card>
  </Container>
  </div>
)}