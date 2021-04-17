import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Icon from '@material-ui/core/Icon';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";

import FacebookIcon from '../../components/Icon/FacebookIcon.js'
import TwitterIcon from '../../components/Icon/TwitterIcon.js'
import InstagramIcon from '../../components/Icon/InstagramIcon.js'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { useLocation } from "react-router";
const CustomIconButton = withStyles({
  root: {
    margin: '1%',
    backgroundColor: '#2e3131',
    '&:hover': {
      backgroundColor: '#3d3d3d',
    },
    '&:active': {
      boxShadow: 'none',
    },
  },
})(Button);



const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const brandComponent = <Button href='#' className={classes.title}>{brand}</Button>;
  return (
    <AppBar className={appBarClasses}>
      <div id='BackHome' className={'BannerElements'}>
        <Button id='GoBack' className={'makeStyles-button-53'} variant="contained" color="secondary" href='https://thelostthoughts.com/' startIcon={<Icon>arrow_back</Icon>}>Go Back</Button>
      </div>
      <Toolbar className={classes.container}>
        <div className={classes}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        {leftLinks !== undefined ? brandComponent : null}
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <div id='BannerSocials' className={'BannerElements'}>
        <CustomIconButton className={'makeStyles-justIcon-74 makeStyles-round-71 makeStyles-button-53'} justIcon href='' round color="trasparent" ><FacebookIcon /></CustomIconButton>
        <CustomIconButton className={'makeStyles-justIcon-74 makeStyles-round-71 makeStyles-button-53'} justIcon href='' round color="trasparent" ><TwitterIcon /></CustomIconButton>
        <CustomIconButton className={'makeStyles-justIcon-74 makeStyles-round-71 makeStyles-button-53'} justIcon href='' round color="trasparent" ><InstagramIcon /></CustomIconButton>
      </div>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
          <List className={'makeStyles-list-41'}>
            <ListItem className={'makeStyles-listItem-42'}>
              <Button
                href="#aboutme"
                color="transparent"
                className={'makeStyles-button-53 makeStyles-transparent-67 makeStyles-navLink-44'}
              > GO BACK
              </Button>
            </ListItem>
          </List>
            {leftLinks}
            {rightLinks}
            <ul className={'MuiList-root makeStyles-list-75 MuiList-padding'}>
              <li className={'MuiListItem-root makeStyles-listItem-76 MuiListItem-gutters DropdownSocials'} style={{textAlign:'center'}}>
              <CustomIconButton className={'makeStyles-justIcon-74 makeStyles-round-71 makeStyles-button-53'} justIcon href='' round color="trasparent" ><FacebookIcon /></CustomIconButton>
              <CustomIconButton className={'makeStyles-justIcon-74 makeStyles-round-71 makeStyles-button-53'} justIcon href='' round color="trasparent" ><TwitterIcon /></CustomIconButton>
              <CustomIconButton className={'makeStyles-justIcon-74 makeStyles-round-71 makeStyles-button-53'} justIcon href='' round color="trasparent" ><InstagramIcon /></CustomIconButton>
              </li>
            </ul>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
