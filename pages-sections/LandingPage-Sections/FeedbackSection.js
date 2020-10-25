import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>We Want To Hear From You</h2>
          <h4 className={classes.description}>At SWD we care about our members, Because of that we
          are always taking into account their feedback. If something seems wrong or it can simply be improved
          let us know!
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={8} md={6}>
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={8} md={6}>
                <CustomInput
                  labelText="Topic"
                  id="inquiry"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={8} md={6}>
                <CustomInput
                  labelText="Level of Urgency"
                  id="reponse"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Feedback"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem xs={15} sm={22} md={12} className={classes.textCenter}>
                <Button color="primary">Submit</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
