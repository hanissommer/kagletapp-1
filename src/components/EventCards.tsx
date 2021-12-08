import React from "react";
import { Avatar, Box, Card, CardMedia, Typography } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { createTheme } from "@material-ui/core/styles";
import partyImage1 from "../logos/partyImage1.png";
import campusImage1 from "../logos/campusImage1.png";
import studyImage1 from "../logos/studyImage1.png";
import studyImage2 from "../logos/studyImage2.png";
import studyImage3 from "../logos/studyImage3.png";
import campusImage2 from "../logos/campusImage2.png";
import campusImage3 from "../logos/campusImage3.png";
import partyImage2 from "../logos/partyImage2.png";
import partyImage3 from "../logos/partyImage3.png";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import BackpackRoundedIcon from "@material-ui/icons/BackpackRounded";
import { AccountBox } from "@material-ui/icons";
import { PlusOneButton } from "./PlusOneButton";

const useStyles = makeStyles((theme) => ({
  cardcomponent: {
    width: "82%",
  },
  username: {
    textAlign: "left",
  },
  leftAlignText: {
    textAlign: "left",
    justifyContent: "center",
    paddingLeft: 10,
  },
  cardLooks: {
    borderRadius: 12,
  },
  cardTitle: {
    //fontSize: 20,
    paddingLeft: 10,
  },
  cardSubtitle: {
    //fontSize: 17,
    paddingLeft: 5,
  },
  media: {
    height: 170,
  },
  titleIcon: {
    paddingTop: 7,
  },
  locationSubtitle: {
    paddingLeft: 10,
  },
  rsvpCount: {
    paddingBottom: 5,
  },
  main: {
    overflow: "hidden",
    borderTopLeftRadius: "0.7rem",
    borderTopRightRadius: "0.7rem",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      display: "block",
      width: "100%",
      height: "100%",
    },
  },
  content: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: "1.5rem 1.5rem 1rem",
  },
  tag: {
    display: "inline-block",
    fontFamily: "'Sen', sans-serif",
    backgroundColor: "#ff5dac",
    borderRadius: "0.5rem",
    padding: "2px 0.5rem",
    color: "#fff",
    marginBottom: "0.5rem",
  },
  title: {
    fontFamily: "'Sen', 'sans-serif'",
    fontSize: "2rem",
    fontWeight: 800,
    color: "#fff",
  },
}));

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
export interface EventDetails {
  name: string;
  type?: string;
  location?: string;
  time?: string;
  email?: string;
  rsvpList?: any;
  eventID?: string;
}

function randomGenerator() {
  const min = 0;
  const max = 2;
  const random = min + Math.random() * (max - min);

  return random;
}

function chooseImage(type?: string) {
  let imageName = "";
  let random = Math.round(randomGenerator());
  if (type === "Study Sesh") {
    if (random === 0) {
      imageName = studyImage1;
    } else if (random === 1) {
      imageName = studyImage2;
    } else {
      imageName = studyImage3;
    }
  }
  if (type === "House Party") {
    if (random === 0) {
      imageName = partyImage1;
    } else if (random === 1) {
      imageName = partyImage2;
    } else {
      imageName = partyImage3;
    }
  }
  if (type === "Campus Event") {
    if (random === 0) {
      imageName = campusImage1;
    } else if (random === 1) {
      imageName = campusImage2;
    } else {
      imageName = campusImage3;
    }
  }

  return imageName;
}

function chooseIcon(type?: string) {
  let typeIcon: any = "";
  if (type === "Study Sesh") {
    typeIcon = <BackpackRoundedIcon />;
  }
  if (type === "House Party") {
    typeIcon = <LocalBarIcon />;
  }
  if (type === "Campus Event") {
    typeIcon = <SchoolRoundedIcon />;
  }
  return typeIcon;
}

export const EventCards: React.FC<EventDetails> = (props: EventDetails) => {
  const classes = useStyles();

  return (
    // holding the cards in this div, using useStyles from up top
    <div className={classes.cardcomponent}>
      {/* card component for each card */}
      <Card variant="outlined" className={classes.cardLooks}>
        {/* 
        card header holds title (orange part) 
        gets data from firebase where it says props.xxx 
        "xxx" is defined in the interface before the export const EventCards
        */}
        <Box className={classes.main} minHeight={300} position={"relative"}>
          <CardMedia
            className={classes.media}
            image={chooseImage(props.type)}
            title="Event Type Media"
          />
          <div className={classes.content}>
            <div className={classes.tag}>{props.type}</div>
            <Typography variant={"h2"} className={classes.title}>
              {props.name} @ {props.location}
            </Typography>
          </div>
        </Box>

        {/* card content (the white part),  */}
        <CardContent>
          <Grid
            container
            direction="row-reverse"
            justifyContent="flex-end"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid
              container
              direction="row-reverse"
              justifyContent="flex-end"
              alignItems="center"
              wrap="nowrap"
            ></Grid>
            <Grid
              container
              direction="row-reverse"
              justifyContent="flex-end"
              alignItems="center"
              wrap="nowrap"
            >
              <Grid item className={`${classes.cardSubtitle} ${"subheading"}`}>
                {props.time}
              </Grid>
            </Grid>
            <Grid item>Test</Grid>
            <Grid item>
              <Avatar style={{ height: 40, width: 40 }}>KK</Avatar>
            </Grid>
          </Grid>

          {/* <span>&nbsp;</span> */}
          {/* <Grid
            container
            direction="row-reverse"
            justifyContent="flex-end"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid
              item
              className={`${classes.locationSubtitle} ${"subheading"}`}
            >
              {props.location}
            </Grid>
            <LocationOnOutlinedIcon />
          </Grid>
          <Grid
            container
            direction="row-reverse"
            justifyContent="flex-end"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item className={`${classes.cardSubtitle} ${"subheading"}`}>
              {props.time}
            </Grid>
          </Grid>
          &nbsp;
          <Grid
            container
            direction="row-reverse"
            justifyContent="flex-end"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item className={`${classes.leftAlignText} ${"subheading"}`}>
              {props.email}
            </Grid>
            <AccountBox />
          </Grid> */}
        </CardContent>
        {/* Card actions goes here */}
        {/* <CardActions>
          <PlusOneButton
            eventID={props.eventID}
            rsvpList={props.rsvpList}
          ></PlusOneButton>
          &nbsp; &nbsp;
        </CardActions> */}
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
           <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography> 
            <WithComments></WithComments>
        </CardContent>
      </Collapse> */}
      </Card>
      &nbsp;
    </div>
  );
};
