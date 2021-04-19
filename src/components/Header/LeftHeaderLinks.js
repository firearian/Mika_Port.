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

export default function LeftHeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        > DEMO REEL
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#featured"
          color="transparent"
          className={classes.navLink}
        > FEATURED WORKS
        </Button>
      </ListItem>
    </List>
  );
}
