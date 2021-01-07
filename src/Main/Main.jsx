import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Counter from '../Counter/Counter';
import Header from '../Header/Header';
import { Divider, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const classes = useStyles();
  const count = useSelector((state) => state.value);

  return (
    <div className={classes.container}>
      <Typography color="primary" variant="h4">
        Parent component
      </Typography>
      <Typography color="primary" variant="h4">
        {count}
      </Typography>
      <Grid container justify="space-evenly" alignItems="center">
        <Counter title="Card 1" />
        <Counter title="Card 2" />
      </Grid>
    </div>
  );
};

Main.propTypes = {};
const useStyles = makeStyles({
  container: {
    height: 500,
    width: '70%',
    backgroundColor: '#ddd',
    display: 'grid',
    gridTemplateColumns: '1f',
    columnGap: '16px',
    padding: 16,
  },
});
export default Main;
