import React from "react";
import { Grid, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Grid container spacing={2} className={styles.footerGrid}>
      <Grid item xs={6} className={styles.footerItem}>
        <Typography>Muhammad Danyal Jamil</Typography>
      </Grid>
      <Grid container item xs={6} spacing={2} className={styles.footerItem}>
        <Grid item>
          <a href="https://github.com/D3nii">
            <GitHubIcon className={styles.icon} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/in/d3ni/">
            <LinkedInIcon className={styles.icon} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.facebook.com/d3nyal">
            <FacebookIcon className={styles.icon} />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
