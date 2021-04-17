import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SvgIcon from '@material-ui/core/SvgIcon';

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import IconButton from '@material-ui/core/IconButton';

import Divider from '@material-ui/core/Divider';

import Parallax from "components/Parallax/Parallax_Video.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import LeftHeaderLinks from "components/Header/LeftHeaderLinks.js";

import FacebookIcon from '../../components/Icon/FacebookIcon.js'
import TwitterIcon from '../../components/Icon/TwitterIcon.js'
import InstagramIcon from '../../components/Icon/InstagramIcon.js'
import SoundcloudIcon from '../../components/Icon/SoundcloudIcon.js'
import BandcampIcon from '../../components/Icon/BandcampIcon.js'


import styles from "assets/jss/material-kit-react/views/components.js";
import "../../App.css";

const useStyles = makeStyles(styles);

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
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(46,49,49,.5)',
    },
  },
})(Button);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="MIKATTE MUSIC"
        rightLinks={<HeaderLinks />}
        leftLinks={<LeftHeaderLinks />}
        color="dark"
        fixed
        {...rest}
      />
      <Parallax >
      </Parallax>

      <div id='featured' className={classNames(classes.main)}>
        <Divider variant="middle" />
        <p className='Titles' >FEATURED WORKS</p>
        <div id='featured-iframes'>
        <iframe className='iframeM'
        src="https://bandcamp.com/EmbeddedPlayer/album=844138576/size=large/bgcol=333333/linkcol=9a64ff/minimal=true/track=3500955828/transparent=true/" 
        seamless><a href="https://mikatte.bandcamp.com/album/3-modal-miniatures-for-piano">3 Modal Miniatures for Piano by Michaela Cornelius</a>
        </iframe>
        <iframe className='iframeM'
        src="https://bandcamp.com/EmbeddedPlayer/track=304113003/size=large/bgcol=333333/linkcol=9a64ff/minimal=true/transparent=true/" 
        seamless><a href="https://mikatte.bandcamp.com/track/lilburns-impression">Lilburn&#39;s Impression by Michaela Cornelius</a>
        </iframe>
        <iframe className='iframeM'
        src="https://bandcamp.com/EmbeddedPlayer/album=3179284581/size=large/bgcol=333333/linkcol=9a64ff/minimal=true/track=2523298726/transparent=true/" 
        seamless><a href="https://mikatte.bandcamp.com/album/coded-album">Coded - album by Michaela Cornelius</a>
        </iframe>
        </div>
      </div>

      <Divider variant="middle" />

      <div id='aboutme' className={classNames(classes.main)} >
        <main>
          <div id={'portimage'}>
            <img src="https://www.thelostthoughts.com/Michaela/Assets/Headshot.png" alt="Image" />
          </div>
          <div id={'portcontent'}>
            <div id={'porttitle'} className='Titles'>
              <span >ABOUT ME</span>
            </div>
            <div id={'porttext'}>
              <p >Michaela Cornelius is an Auckland-based composer who has recently completed her BMus Honours at the University of Auckland, specialising in Composition. On her way to establishing herself as a freelance composer, Michaela is currently involved as a composer and sound designer for video games and podcasts; releases include G’Night Teddy, Confuddled and Don’t Forget Your Towel. With a focus on vocal and instrumental composition, her works often incorporate aspects of nature, fantasy, and self-reflection. Her research has focused on the application of constraints and RNG in the compositional process. Recent performances of works include the Douglas Lilburn Composition Prize concert, APO and NZSO orchestral readings, and her works have been recorded as part of the SOMSA Recording Project, a student-led initiative at the University of Auckland.</p>
            </div>
          </div>
        </main>
      </div>

      <Divider variant="middle" />


      <div id={'Mcontact'} className={classNames(classes.main)} >
        <h className='Titles' >CONTACT</h>
        <p id={'Cemail'} ><a href='mailto:mikattemusic@gmail.com' >mikattemusic@gmail.com</a></p>
        <div id={'Csocials'} >
        <CustomIconButton justIcon href='' round color="trasparent" ><FacebookIcon /></CustomIconButton>
        <CustomIconButton justIcon href='' round color="trasparent" ><TwitterIcon /></CustomIconButton>
        <CustomIconButton justIcon href='' round color="trasparent" ><InstagramIcon /></CustomIconButton>
        <CustomIconButton justIcon href='' round color="trasparent" ><SoundcloudIcon /></CustomIconButton>
        <CustomIconButton justIcon href='' round color="trasparent" ><BandcampIcon /></CustomIconButton>
        </div>
      </div>

      <Footer />

{/*       <div className={classNames(classes.main)} >
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div>
      <Footer /> */}
    </div>
  );
}
