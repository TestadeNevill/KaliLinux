import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import BugReportIcon from "@material-ui/icons/BugReport";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Quote from "components/Typography/Quote.js";
import Primary from "components/Typography/Primary.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h2>Types of Hackers</h2>
          </div>
          <div className={classes.title}>
            <h3>
              <small>Here's a debriefing on types of hackers</small>
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
                        <div>
                          <Card>
                            <CardHeader color="danger">
                              <h4>
                                <b>Black Hat</b>
                              </h4>
                              The stereotypical ‘hacker’
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="the kind you hear about on the news.s"
                                author="“Never underestimate the determination of a kid who is time-rich and cash-poor.”
― Cory Doctorow, Little Brother"
                              />
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardHeader color="success">
                              <h4>
                                <b>White Hat</b>
                              </h4>
                              The Yang to the Black Hat’s Yin
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="“While they are busy with reconnaissance, focus on exploitation.
PS : reconnaissance is an ESSENTIAL phase.”"
                                author="― Amine Essiraj"
                              />
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardHeader color="muted">
                              <h4>
                                <b>Grey Hat</b>
                              </h4>
                              Nothing in life is black and white, and neither is
                              hacking
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="“In this business, I find more value in working with hackers who abstract new realities from cast aside code and concepts than academics who regurgitate other people’s work and try to pawn it off as their own.”"
                                author="― James Scott, Senior Fellow, Institute for Critical Infrastructure Technology"
                              />
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardHeader color="danger">
                              <h4>
                                <b>Blue Hat</b>
                              </h4>
                              Vengeful and aggressive in every way
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="“There are few sources of energy so powerful as a procrastinating college student.” "
                                author="-- Unknown"
                              />
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardHeader color="danger">
                              <h4>
                                <b>Red Hat</b>
                              </h4>
                              The caped crusaders of the cyber world
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="If you rate a programmer or coder 7.5/10 on knowledge basis, you would definitely have to rate a hacker 10.”"
                                author="-- Uknown"
                              />
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardHeader color="primary">
                              <h4>
                                <b>Baby Hackers</b>
                              </h4>
                              Taking their first steps in the cyber world.
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="“Most hackers are young because young people tend to be adaptable. As long as you remain adaptable, you can always be a good hacker.” – Emmanuel Goldstein"
                                author="-- Unknown"
                              />
                            </CardBody>
                          </Card>
                          <br />
                          <Card>
                            <CardHeader color="warning">
                              <h4>
                                <b>Script Kiddie </b>
                              </h4>
                              This is something of an ‘odd one out’, since it’s
                              neither a hat or a colour! But a Script Kiddie can
                              still cause problems, no matter how innocent the
                              name sounds.
                            </CardHeader>
                            <CardBody>
                              <Quote
                                text="“Before every successful Coder there an even more successful De-coder to understand that code.”"
                                author="Uknown"
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
                          <h6>(Black Hat)</h6>
                          <h5>
                            <b>Motives:</b>
                          </h5>
                          <h6>
                            <b>
                              <Danger>Financial gain</Danger>
                            </b>
                          </h6>
                          <h5>
                            <b>Aims:</b>
                          </h5>{" "}
                          To break into your business and steal bank details,
                          money or confidential data. They usually use these
                          stolen resources for their own gain, to sell on to the
                          black market or to extort the target business.
                          <h5>
                            <b>What That Means for You:</b>
                          </h5>{" "}
                          Black Hat hackers are at the top of the business risk
                          list. Their methods are varied but basic, so they can
                          be protected against. But if their attacks are
                          successful, the results could be devastating for your
                          business and your customers.
                        </p>
                        <br />
                        <p>
                          <h6>(White Hat)</h6>
                          <h5>
                            <b>Motives:</b>
                          </h5>{" "}
                          <h6>
                            <b>
                              <Success>
                                A desire to help businesses, along with a
                                passion for finding holes in security networks.
                              </Success>{" "}
                            </b>
                          </h6>
                          <h6>
                            <b>Aims:</b>
                          </h6>{" "}
                          To protect businesses and support them in the ongoing
                          battle against cyber threats. A White Hat hacker is
                          someone like us – a company or individual who will
                          help you protect your business. They can help you put
                          effective protections in place, find vulnerabilities
                          and provide solutions to solve them, before other
                          hackers find them. There is even a qualification and
                          organisation specifically for them – the CEH
                          (Certified Ethical Hacker) from the EC Council.
                          <h5>
                            <b>What That Means for You:</b>
                          </h5>{" "}
                          A business that is well protected from every angle of
                          attack in the digital world, and ongoing support in
                          case of a breach.
                        </p>
                        <br />
                        <p>
                          <h6>(Grey Hat)</h6>
                          <h5>
                            <b>Motives:</b>
                          </h5>
                          <h6>
                            <b>
                              <Warning>Personal enjoyment.</Warning>
                            </b>
                          </h6>
                          <h5>
                            <b>Aims:</b>
                          </h5>{" "}
                          Grey Hat hackers have all the skills of a Black and a
                          White Hat hacker. The difference is, they don’t care
                          about stealing from people, nor do they particularly
                          want to help people. Instead, they like to play with
                          systems and enjoy the challenge of finding gaps,
                          breaking protections and generally just find hacking
                          fun.
                          <h5>
                            <b>What That Means for You:</b>
                          </h5>{" "}
                          Despite their skill set and the fact that they do
                          break into systems, Grey Hat hackers will rarely do
                          anything harmful. They break into things because they
                          can, and then move on. Grey Hat hackers actually make
                          up the majority of the hacking community, even though
                          it’s the Black Hat’s most people know about.
                        </p>
                        <br />
                        <p>
                          <h6>(Blue Hat)</h6>
                          <h5>
                            <b>Motives:</b>
                          </h5>
                          <h6>
                            <b>
                              <Danger>Revenge</Danger>
                            </b>
                          </h6>
                          <h5>
                            <b>Aims:</b>
                          </h5>{" "}
                          Blue Hat hackers often take existing code for malware
                          and viruses they find online, then modify it to meet
                          their needs. They will use this code to target the
                          business or individual they feel has wronged them and
                          inflict their revenge.
                          <h5>
                            <b>What That Means for You:</b>
                          </h5>{" "}
                          Generally, only a problem if you’ve made someone very,
                          very angry. This could be a customer, supplier or
                          employee – anyone who might be so angry that they want
                          to ‘make you pay’.
                        </p>
                        <br />
                        <p>
                          <h6>(Red Hat)</h6>
                          <h5>
                            <b>Motives:</b>
                          </h5>
                          <h6>
                            <b>
                              <Success>Vigilante justice.</Success>
                            </b>
                          </h6>
                          <h6>
                            <b>Aims:</b>
                          </h6>{" "}
                          To put a stop to people they know to be Black Hat
                          hackers. But they are downright scary in how they go
                          about it. They essentially take the Black Hat’s
                          arsenal and turn it back against them. Using malware,
                          DoS attacks, viruses and Trojan Horses to destroy
                          their machines from the inside out. It’s a pretty
                          effective way of stopping them from attacking anyone
                          else!
                          <h5>
                            <b>What That Means for You:</b>
                          </h5>{" "}
                          Nothing really. Red Hat hackers are similar to White
                          Hat ones, in the sense that they are working to put a
                          stop to Black Hat attacks on your business. But you
                          probably won’t know about it.
                        </p>
                        <br />
                        <p>
                          <h6>(Green Hat)</h6>
                          <h5>
                            <b>Motives:</b>
                          </h5>
                          <h6>
                            <b>
                              <Primary>
                                Learning to be full blown hackers.
                              </Primary>
                            </b>
                          </h6>
                          <h5>
                            <b>Aims:</b>
                          </h5>{" "}
                          Green Hat hackers are all about the learning. They are
                          new to the world of scripting, coding and hacking in
                          general, so you probably won’t find one attacking.
                          Instead, they hang around online message boards asking
                          questions of more developed hackers, honing their
                          skills.
                          <h5>
                            <b>What That Means for You:</b>
                          </h5>{" "}
                          Green Hat hackers don’t really represent a threat to
                          businesses. They are still ‘green’, and more
                          interested in learning how to hack than actually doing
                          it..
                        </p>
                        <br />
                        <p>
                          <h6>(Script Kiddies)</h6>
                          <h5>
                            <b>Motives:</b>
                          </h5>
                          <h6>
                            <b>
                              <Danger>Causing chaos and disruption.</Danger>
                            </b>
                          </h6>
                          <h5>
                            <b>Aims:</b> Script Kiddies have no interest in
                            things as mundane as theft. Or, as it turns out,
                            script. They don’t tend to develop their own
                            software – instead they download existing malware
                            development software and watch videos on how to use
                            it. When they’re confident, they’ll attack. A
                            typical Script Kiddie attack would be a DoS (Denial
                            of Service) or DDoS (Distributed Denial of Service).
                            This basically means they flood an IP address with
                            so much useless traffic that it collapses. Think
                            most retail websites on Black Friday. It causes
                            chaos and prevents anyone else from using the
                            service.
                          </h5>
                          <h5>
                            <b>What That Means for You:</b>
                          </h5>{" "}
                          While they might not present a financial risk, Script
                          Kiddies can be a pain. They can cause disruption to
                          your business that can damage your reputation or lose
                          you customers, and it can take some time to get
                          everything back online afterwards. So hopefully that
                          clears a few things up and gives you a bit of an
                          insight into the world of hacking in all its colour!
                          At Bridewell, our job as White Hat hackers is to keep
                          all of the other hackers out of your business by
                          identifying weaknesses; protecting you, your clients
                          and your data. For more information or to enquire
                          about out security testing process, get in touch with
                          us today.
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
