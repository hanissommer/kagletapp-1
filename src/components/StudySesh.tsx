import { Typography, Card, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import logo from "../logos/favicon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    color: "red",
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    marginTop: theme.spacing(3),
    borderRadius: 20,
    padding: '0.25rem 2rem',
    borderColor: '#becddc',
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    backgroundColor: "#ffffff",
  },
  title: {
    flexGrow: 1,
    color: "#000000",
  },
  subtitle: {
    flexGrow: 1,
    alignSelf: "flex-end",
    color: "#000000",
  },
  field: {
    "& > *": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
  fabplacement: {
    margin: 0,
    top: "auto",
    right: 170,
    bottom: 30,
    left: "auto",
    position: "fixed",
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
  cardcomponent: {
    width: '90%',
  },
  cardTitle: {
    flexGrow: 1,
    color: "#000000",
    paddingLeft: theme.spacing(7),
  },
  cardpositions: {
    marginBottom: 12,
  },
  username: {
    textAlign: 'left'
  }, 
  rightAlignText: {
    textAlign: 'right'
  }, 
  appicon: {
    height: "4%",
    width: "4%",
    minHeight: 30,
    minWidth: 30,
    paddingBlock: 5,
  }, 
  fabicon: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  }
}));

export const StudySesh = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid 
      container
      direction="column"
      justifyContent="center"
      >
          <Typography
            component="div"
            align="center"
            style={{ height: "100vh" }}
          >
            <Grid> 
            <AppBar position="static" elevation={0}>
              <Toolbar className={classes.toolbar}>
                <Grid container spacing={1} justifyContent="center"
                alignItems="center">
                <img className={classes.appicon} src={logo} alt="Logo" />
                <Typography variant="h5" className={classes.title}>
                  Study Seshes
                </Typography>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                >
                  <AccountCircle />
                </IconButton>
                </Grid>
              </Toolbar>
              
            </AppBar>
            </Grid>


            &nbsp;
            
            <Grid container
              spacing={2}
              direction="column"
              alignItems="center"
              justify="center"
              
            >
            <Card className={classes.cardcomponent} variant="outlined">
              <CardContent>
              <Grid container>
              <Grid item xs={12} sm={6} >
              <Typography className={classes.username }gutterBottom variant="h5" component="h2">
                  Study Sesh
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} alignItems="flex-end">
              <Typography 
              className={classes.rightAlignText} >
                HH:MM
              </Typography>

              </Grid>

              </Grid>


              <Grid container spacing={2}>
              <Grid item xs={12} sm={6} direction="row-reverse"
               justifyContent="flex-end" alignItems="flex-start">
                <Typography className={classes.username}>
                  username
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Typography 
              className={classes.rightAlignText} >
                <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                Location
              </Typography>
                </Grid>
                </Grid>

              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card> 
            
            
            {/* card 2 */}

            &nbsp;

            <Card className={classes.cardcomponent} variant="outlined">
              <CardContent>
              <Grid container spacing={3}>
              <Grid item xs={12} sm={6} direction="row-reverse"
               justifyContent="flex-end" alignItems="flex-start">
              <Typography className={classes.username }gutterBottom variant="h5" component="h2">
                  Study Sesh
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>

              <Typography 
              className={classes.rightAlignText} >
                HH:MM
              </Typography>

              </Grid>

              </Grid>


              <Grid container spacing={2}>
              <Grid item xs={12} sm={6} direction="row-reverse"
               justifyContent="flex-end" alignItems="flex-start">
                <Typography className={classes.username}>
                  username
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Typography 
              className={classes.rightAlignText} >
                <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                Location
              </Typography>
                </Grid>
                </Grid>

              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card> 
            

            {/* card 3 */}

          
            &nbsp;

            <Card className={classes.cardcomponent} variant="outlined">
              <CardContent>
              <Grid container spacing={3}>
              <Grid item xs={12} sm={6} direction="row-reverse"
               justifyContent="flex-end" alignItems="flex-start">
              <Typography className={classes.username }gutterBottom variant="h5" component="h2">
                  Study Sesh
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>

              <Typography 
              className={classes.rightAlignText} >
                HH:MM
              </Typography>

              </Grid>

              </Grid>


              <Grid container spacing={2}>
              <Grid item xs={12} sm={6} direction="row-reverse"
               justifyContent="flex-end" alignItems="flex-start">
                <Typography className={classes.username}>
                  username
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Typography 
              className={classes.rightAlignText} >
                <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                Location
              </Typography>
                </Grid>
                </Grid>

              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card> 
            
            {/* card 4 */}

          
            &nbsp;

            <Card className={classes.cardcomponent} variant="outlined">
              <CardContent>
              <Grid container spacing={3}>
              <Grid item xs={12} sm={6} direction="row-reverse"
               justifyContent="flex-end" alignItems="flex-start">
              <Typography className={classes.username }gutterBottom variant="h5" component="h2">
                  Study Sesh
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>

              <Typography 
              className={classes.rightAlignText} >
                HH:MM
              </Typography>

              </Grid>

              </Grid>


              <Grid container spacing={2}>
              <Grid item xs={12} sm={6} direction="row-reverse"
               justifyContent="flex-end" alignItems="flex-start">
                <Typography className={classes.username}>
                  username
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Typography 
              className={classes.rightAlignText} >
                <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                Location
              </Typography>
                </Grid>
                </Grid>

              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card> 
            
            {/* card 5 */}

          
            &nbsp;

            <Card className={classes.cardcomponent} variant="outlined">
              <CardContent>
              <Grid container spacing={3}>
              <Grid item xs={12} sm={6} direction="row-reverse"
               justifyContent="flex-end" alignItems="flex-start">
              <Typography className={classes.username }gutterBottom variant="h5" component="h2">
                  Study Sesh
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>

              <Typography 
              className={classes.rightAlignText} >
                HH:MM
              </Typography>

              </Grid>

              </Grid>


              <Grid container spacing={2}>
              <Grid item xs={12} sm={6} direction="row-reverse"
               justifyContent="flex-end" alignItems="flex-start">
                <Typography className={classes.username}>
                  username
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Typography 
              className={classes.rightAlignText} >
                <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                Location
              </Typography>
                </Grid>
                </Grid>

              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card> 
            
            {/* card 6 */}

          
            &nbsp;


            </Grid>

          {/*fabicon */}

              <Fab
                aria-label="add"
                color="secondary"
                className={classes.fabicon}
              >
                <AddIcon />
              </Fab>

          </Typography>
        </Grid>
    </div>
  );
};