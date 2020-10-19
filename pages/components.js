import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page

import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SecondPills from "pages-sections/Components-Sections/SecondPills.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand=" SWD Information Security  "
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/nextjs_header.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>SWD Information Security</h1>
                <h3 className={classes.subtitle}>
                  You shouldn't feel like you are alone and neither should your
                  loved ones
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionPills />
        <SectionCarousel />
        <SecondPills />
        {/*<SectionTypography />
        <SectionJavascript />
        <SectionCompletedExamples />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload />*/}
      </div>
      <Footer />
    </div>
  );
}
