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
            <h1>Support</h1>
          </div>
          <div className={classes.title}>
            <h3>
              <medium> explanation of services </medium>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
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
                  {
                    tabButton: "Risks",
                    tabIcon: ErrorOutlineIcon,
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
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6}>
              <NavPills
                color="primary"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 },
                }}
                tabs={[
                  {
                    tabButton: "Powerful",
                    tabIcon: OfflineBoltIcon,
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
                          Nullam non viverra massa. Ut lobortis dignissim
                          iaculis. Vivamus eleifend sapien a augue rutrum
                          condimentum. Class aptent taciti sociosqu ad litora
                          torquent per conubia nostra, per inceptos himenaeos.
                          Orci varius natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Curabitur eget felis
                          lacus.
                        </p>
                        <br />
                        <p>
                          Nullam non viverra massa. Ut lobortis dignissim
                          iaculis. Vivamus eleifend sapien a augue rutrum
                          condimentum. Class aptent taciti sociosqu ad litora
                          torquent per conubia nostra, per inceptos himenaeos.
                          Orci varius natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Curabitur eget felis
                          lacus.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Personalised",
                    tabIcon: PersonIcon,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Nullam non viverra massa. Ut lobortis dignissim
                          iaculis. Vivamus eleifend sapien a augue rutrum
                          condimentum. Class aptent taciti sociosqu ad litora
                          torquent per conubia nostra, per inceptos himenaeos.
                          Orci varius natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Curabitur eget felis
                          lacus. Nulla egestas velit sed blandit pretium.
                          Curabitur purus tortor, porta nec accumsan id,
                          hendrerit quis urna. In velit sem, congue a lacus sit
                          amet, tempus aliquam erat. Aenean commodo rutrum.
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
