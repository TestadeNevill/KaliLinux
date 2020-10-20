import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import classNames from "classnames";

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
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h1>Cyberattack Guide</h1>
          </div>
          <div className={classes.title}>
            <h3>
              <medium>Common types of cyber attacks (in order)</medium>
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
                          Malware
                        </p>
                        <br />
                        <p>
                          Phishing
                        </p>
                        <br />
                        <p>
                          Man-in-the-middle attack
                        </p>
                        <br />
                        <p>
                          Denial-of-service attack(DDos)
                        </p>
                        <br />
                        <p>
                          SQL injection
                        </p>
                        <br />
                        <p>
                          Zero-day exploit
                        </p>
                        <br />
                        <p>
                          DNS Tunneling
                        </p>
                        <br />
                      </span>
                    ),
                  },
                  {
                    tabButton: "Targeted",
                    tabIcon: LocationSearchingIcon,
                    tabContent: (
                      <span>
                        <p>
                          Malware is a term used to describe malicious software, including spyware, ransomware, viruses, and worms. Malware breaches a network through a vulnerability, typically when a user clicks a dangerous link or email attachment that then installs risky software. Once inside the system, malware can do the following:

                          Blocks access to key components of the network (ransomware)
                          Installs malware or additional harmful software
                          Covertly obtains information by transmitting data from the hard drive (spyware)
                          Disrupts certain components and renders the system inoperable
                        </p>
                        <br />
                        <p>
                          Phishing is the practice of sending fraudulent communications that appear to come from a reputable source, usually through email. The goal is to steal sensitive data like credit card and login information or to install malware on the victim’s machine. Phishing is an increasingly common cyberthreat
                        </p>
                        <br />
                        <p>
                          Man-in-the-middle (MitM) attacks, also known as eavesdropping attacks, occur when attackers insert themselves into a two-party transaction. Once the attackers interrupt the traffic, they can filter and steal data.

                          Two common points of entry for MitM attacks:

                          1. On unsecure public Wi-Fi, attackers can insert themselves between a visitor’s device and the network. Without knowing, the visitor passes all information through the attacker.

                          2. Once malware has breached a device, an attacker can install software to process all of the victim’s information.
                        </p>
                        <br />
                        <p>
                          A denial-of-service attack floods systems, servers, or networks with traffic to exhaust resources and bandwidth. As a result, the system is unable to fulfill legitimate requests. Attackers can also use multiple compromised devices to launch this attack. This is known as a distributed-denial-of-service (DDoS) attack.
                        </p>
                        <br />
                        <p>
                          A Structured Query Language (SQL) injection occurs when an attacker inserts malicious code into a server that uses SQL and forces the server to reveal information it normally would not. An attacker could carry out a SQL injection simply by submitting malicious code into a vulnerable website search box.
                        </p>
                        <br />
                        <p>
                          A zero-day exploit hits after a network vulnerability is announced but before a patch or solution is implemented. Attackers target the disclosed vulnerability during this window of time. Zero-day vulnerability threat detection requires constant awareness.
                        </p>
                        <br />
                        <p>
                          DNS tunneling utilizes the DNS protocol to communicate non-DNS traffic over port 53. It sends HTTP and other protocol traffic over DNS. There are various, legitimate reasons to utilize DNS tunneling. However, there are also malicious reasons to use DNS Tunneling VPN services. They can be used to disguise outbound traffic as DNS, concealing data that is typically shared through an internet connection. For malicious use, DNS requests are manipulated to exfiltrate data from a compromised system to the attacker’s infrastructure. It can also be used for command and control callbacks from the attacker’s infrastructure to a compromised system.
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
                          High
                        </p>
                        <br />
                        <p>
                          High
                        </p>
                        <br />
                        <p>
                          High
                        </p>
                        <br />
                        <p>
                          High
                        </p>
                        <br />
                        <p>
                          Medium
                        </p>
                        <br />
                        <p>
                          High
                        </p>
                        <br />
                        <p>
                          High
                        </p>
                        <br />
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
                        </p>
                        <br />
                        <p>
                        </p>
                        <br />
                        <p>
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
                          Love what you see wish to personalize your own security news,tips, and software? Login/Signup and starting protecting yourself
                        </p>
                                {/* <div className={classes.section}>
                                  <div className={classes.container}>
                                    <div id="navigation-pills">
                                      <div className={classes.title}></div>
                                        <div className={classNames(classes)}>
                                          <SectionLogin />
                                          </div>
                                        </div>
                                      </div> 
                                  </div>
                       */}
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
