import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Quote from "components/Typography/Quote.js";

import classNames from "classnames";

// @material-ui/icons
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import BugReportIcon from "@material-ui/icons/BugReport";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import PersonIcon from "@material-ui/icons/Person";

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
                        <div>
                          <Card>
                            <CardHeader color="info">
                              <b>Malware</b>
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="MyDoom first emerged in 2004 and is still regarded as one of the fastest spreading and most destructive computer viruses of all time – at one point, the worm generated up to a quarter of all emails being sent worldwide.

                                It spread by scraping email addresses from infected Windows computers and spread to victim's contacts by sending a new version of itself as a malicious attachment. If the attachment was opened, the process would repeat and MyDoom spread to more victims, roping them into a botnet that could perform Distributed Denial of Service (DDoS) attacks."
                                author="My Doom of 2004. Cost $38 Billion"
                              />
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardHeader color="info">
                              <b>Phishing</b>
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="StormWorm—a type of trojan horse attack and not a worm that sends malware to other computers—tricked people into clicking on an email link to an article about a storm raging across Europe, 230 Dead as storm batters Europe. The hackers also targeted curious users with headlines the U.S. Secretary of State Condoleezza Rice has kicked German Chancellor.

                                Hundreds of thousands of people clicked in the first few hours. It sought out Microsoft Information Systems that weren’t properly updated."
                                author="Storm Worm of 2007. Cost $10 Billion"
                              />
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardHeader color="info">
                              <b>Man In The Middle</b>
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="Dutch cybersecurity company hit by man-in-the-middle attack due to no 2Factor Authentification"
                                author="Fox-IT of 2017. Cost Unknown"
                              />
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardHeader color="info">
                              <b>Denial-Of-Service Attack(D.D.o.S)</b>
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="The CODE RED worm terrified computer users in 2001, when it took over millions of computers, splashing a page across screens that read: “CODE RED: WELCOME TO WORM.COM HACKED BY CHINESE.” 

                                It was a type of computer attack called a distributed denial of service attack (DDoS), which meant that it spammed websites with higher-than-normal traffic volumes. The worm struck hundreds of thousands of machines in just a few hours."
                                author="Code Red of 2001. Cost $2 Billion"
                              />
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardHeader color="info">
                              <b>SQL Injection</b>
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="Instead of taking advantage of curious, unsuspecting email users, the SLAMMER worm targeted and took advantage of a bug in the code of Microsoft’s SQL servers. It was devastating and spread rapidly across the world, affecting 75,000 servers in ten minutes.

                                The internet slowed to a stop. Internet and cell phone service in South Korea ground to a halt, airlines were unable to process tickets and bank ATMs stopped working."
                                author="SQL Slammer of 2003. Cost $1.2 Billion"
                              />
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardHeader color="info">
                              <b>Zero-Day Exploit</b>
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="The DNC hack is one that we are all familiar with and have covered over the last eight months. The data that was released about the Democratic National Committee (DNC) was a result of a zero-day attack. In fact, there were at least six zero-day vulnerabilities that were exploited to gain access to the data that was stolen. The vulnerabilities were found by state-backed, Russian hackers in Microsoft Windows 10, Adobe Flash, and Java. In order for the vulnerabilities to be exploited, the gang of hackers engaged in a spear-phishing campaign."
                                author="The DNC Hack of 2016. Cost Election"
                              />
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardHeader color="info">
                              <b>DNS Tunneling</b>
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="IDC reports that 82% of companies worldwide have faced a DNS attack over the past year. The research firm recently published its fifth annual Global DNS Threat Report, which is based on a survey IDC conducted on behalf of DNS security vendor EfficientIP of 904 organizations across the world during the first half of 2019."
                                author="Everyday. DNS Tunnel happens per the second"
                              />
                            </CardBody>
                          </Card>
                          <br />
                        </div>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Targeted",
                    tabIcon: LocationSearchingIcon,
                    tabContent: (
                      <span>
                        <p>
                          <h5>
                            <b>Malware</b>
                          </h5>
                          is a term used to describe malicious software,
                          including spyware, ransomware, viruses, and worms.
                          Malware breaches a network through a vulnerability,
                          typically when a user clicks a dangerous link or email
                          attachment that then installs risky software. Once
                          inside the system, malware can do the following:
                          Blocks access to key components of the network
                          (ransomware) Installs malware or additional harmful
                          software Covertly obtains information by transmitting
                          data from the hard drive (spyware) Disrupts certain
                          components and renders the system inoperable
                        </p>
                        <br />
                        <p>
                          <h5>
                            <b>Phishing</b>
                          </h5>
                          is the practice of sending fraudulent communications
                          that appear to come from a reputable source, usually
                          through email. The goal is to steal sensitive data
                          like credit card and login information or to install
                          malware on the victim’s machine. Phishing is an
                          increasingly common cyberthreat
                        </p>
                        <br />
                        <p>
                          <h5>
                            <b>Man-in-the-middle (MitM) attacks,</b>
                          </h5>{" "}
                          also known as eavesdropping attacks, occur when
                          attackers insert themselves into a two-party
                          transaction. Once the attackers interrupt the traffic,
                          they can filter and steal data. Two common points of
                          entry for MitM attacks: 1. On unsecure public Wi-Fi,
                          attackers can insert themselves between a visitor’s
                          device and the network. Without knowing, the visitor
                          passes all information through the attacker. 2. Once
                          malware has breached a device, an attacker can install
                          software to process all of the victim’s information.
                        </p>
                        <br />
                        <p>
                          <h5>
                            <b>D.D.o.S</b>
                          </h5>{" "}
                          A denial-of-service attack floods systems, servers, or
                          networks with traffic to exhaust resources and
                          bandwidth. As a result, the system is unable to
                          fulfill legitimate requests. Attackers can also use
                          multiple compromised devices to launch this attack.
                          This is known as a distributed-denial-of-service
                          (DDoS) attack.
                        </p>
                        <br />
                        <p>
                          <h5>
                            <b>SQL Injection</b>
                          </h5>{" "}
                          or a Structured Query Language (SQL) injection occurs
                          when an attacker inserts malicious code into a server
                          that uses SQL and forces the server to reveal
                          information it normally would not. An attacker could
                          carry out a SQL injection simply by submitting
                          malicious code into a vulnerable website search box.
                        </p>
                        <br />
                        <p>
                          <h5>
                            <b>A zero-day exploit</b>
                          </h5>{" "}
                          hits after a network vulnerability is announced but
                          before a patch or solution is implemented. Attackers
                          target the disclosed vulnerability during this window
                          of time. Zero-day vulnerability threat detection
                          requires constant awareness.
                        </p>
                        <br />
                        <p>
                          <h5>
                            <b>DNS tunneling</b>
                          </h5>{" "}
                          utilizes the DNS protocol to communicate non-DNS
                          traffic over port 53. It sends HTTP and other protocol
                          traffic over DNS. There are various, legitimate
                          reasons to utilize DNS tunneling. However, there are
                          also malicious reasons to use DNS Tunneling VPN
                          services. They can be used to disguise outbound
                          traffic as DNS, concealing data that is typically
                          shared through an internet connection. For malicious
                          use, DNS requests are manipulated to exfiltrate data
                          from a compromised system to the attacker’s
                          infrastructure. It can also be used for command and
                          control callbacks from the attacker’s infrastructure
                          to a compromised system.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Risks",
                    tabIcon: ErrorOutlineIcon,
                    tabContent: (
                      <span>
                        <h3>High</h3>
                        <h6>(Malware)</h6>
                        <div>
                          <CustomLinearProgress
                            variant="determinate"
                            color="danger"
                            value={100}
                          />
                          <br />
                          <h3>High</h3>
                          <h6>(Phishing)</h6>
                          <CustomLinearProgress
                            variant="determinate"
                            color="danger"
                            value={100}
                          />
                          <br />
                          <h3>High</h3>
                          <h6>(Man in the Middle Attack)</h6>
                          <br />
                          <CustomLinearProgress
                            variant="determinate"
                            color="danger"
                            value={100}
                          />
                          <br />
                          <h3>Medium</h3>
                          <h6>(D.D.o.S)</h6>
                          <br />
                          <CustomLinearProgress
                            variant="determinate"
                            color="warning"
                            value={100}
                          />
                          <br />
                          <h3>High</h3>
                          <h6>(SQL Injection)</h6>
                          <CustomLinearProgress
                            variant="determinate"
                            color="danger"
                            value={100}
                          />
                          <br />
                          <h3>High</h3>
                          <h6>(A Zero-Day Exploit)</h6>
                          <br />
                          <CustomLinearProgress
                            variant="determinate"
                            color="danger"
                            value={100}
                          />
                          <br />
                          <h3>High</h3>
                          <h6>(DNS tunneling)</h6>
                          <br />
                          <CustomLinearProgress
                            variant="determinate"
                            color="danger"
                            value={100}
                          />
                        </div>
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
                        <p></p>
                        <br />
                        <p></p>
                        <br />
                        <p></p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Personalised",
                    tabIcon: PersonIcon,
                    tabContent: (
                      <span>
                        <p>
                          Love what you see wish to personalize your own
                          security news,tips, and software? Login/Signup and
                          starting protecting yourself
                        </p>
                        <div className={classes.section}>
                          <div className={classes.container}>
                            <div className={classNames(classes)}>
                              <GridContainer>
                                <span>
                                  <p></p>
                                  <br />
                                  <p></p>
                                  <br />
                                  <p></p>
                                </span>
                              </GridContainer>
                            </div>
                          </div>
                        </div>
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
