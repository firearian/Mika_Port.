/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#aboutme"
          color="transparent"
          className={classes.navLink}
        > ABOUT
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#Mcontact"
          color="transparent"
          className={classes.navLink}
        > CONTACT
        </Button>
      </ListItem>
    </List>
  );
}
