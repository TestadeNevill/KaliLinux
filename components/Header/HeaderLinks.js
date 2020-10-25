/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Help Center"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="feedback">
              <a className={classes.dropdownLink}>Feedback</a>
            </Link>,
            <a
              href="#"
              target=""
              className={classes.dropdownLink}
            >
             Support
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="components "
          color="transparent"
          target=""
          className={classes.navLink}
        >
          <AccountTreeIcon className={classes.icons}/> About us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="login"
          color="transparent"
          target=""
          className={classes.navLink}
        >
          <VpnKeyIcon className={classes.icons} /> Login
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
      </ListItem>
    </List>
  );
}
