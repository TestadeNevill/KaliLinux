import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import BugReportIcon from "@material-ui/icons/BugReport";
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import PersonIcon from '@material-ui/icons/Person';
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h2>Change Title</h2>
          </div>
          <div className={classes.title}>
            <h3>
              <small>add info</small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={15} sm={20} md={22} lg={24}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Threats",
                    tabIcon: BugReportIcon,
                    tabContent: (
                      <span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing 
                          elit. Nulla sollicitudin blandit massa sed
                          consectetur. Nulla sollicitudin blandit massa sed
                          consectetur.
                        </p>
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nulla sollicitudin blandit massa sed
                          consectetur. Nulla sollicitudin blandit massa sed
                          consectetur.
                        </p>
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nulla sollicitudin blandit massa sed
                          consectetur. Nulla sollicitudin blandit massa sed
                          consectetur.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Targeted",
                    tabIcon: LocationSearchingIcon,
                    tabContent: (
                      <span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nulla sollicitudin blandit massa sed
                          consectetur. Nulla sollicitudin blandit massa sed
                          consectetur.
                        </p>
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nulla sollicitudin blandit massa sed
                          consectetur. Nulla sollicitudin blandit massa sed
                          consectetur.
                        </p>
                      </span>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}