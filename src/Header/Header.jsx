import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import MailIcon from '@material-ui/icons/Mail';
import { AppBar, Toolbar, Typography, IconButton, Button, Badge, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Header = (props) => {
  const classes = useStyles(props);
  const count = useSelector((state) => state.value);

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
            <Badge badgeContent={count.toString()} color="secondary">
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
