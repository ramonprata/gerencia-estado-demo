import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import MailIcon from '@material-ui/icons/Mail';
import { AppBar, Toolbar, Typography, IconButton, Button, Badge, Grid } from '@material-ui/core';

const Header = (props) => {
  const { emails } = props;
  const classes = useStyles(props);

  return (
    <AppBar position="static">
      <Toolbar className={classes.containerHeader}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.containerHeader}
        >
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={emails.toString()} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

const useStyles = makeStyles({
  containerHeader: {
    // backgroundColor: 'darkgray',
  },
});

export default Header;
