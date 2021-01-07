import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const Counter = (props) => {
  const classes = useStyles(props);
  const { title } = props;

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <Card className={classes.cardCotainer}>
      <header>
        <Typography variant="h4">{title}</Typography>
      </header>
      <Grid container justify="center">
        <Typography variant="h4">{count}</Typography>
      </Grid>
      <Grid container justify="space-evenly" className={classes.containerButons}>
        <Button onClick={handleIncrement} variant="contained" color="primary">
          Increment
        </Button>
        <Button onClick={handleDecrement} variant="contained" color="secondary">
          Decrement
        </Button>
      </Grid>
    </Card>
  );
};

Counter.propTypes = {};

const useStyles = makeStyles({
  cardCotainer: {
    height: 260,
    width: 300,
    display: 'grid',
    gridTemplateColumns: '1fr',
    columnGap: '16px',
    padding: 16,
  },
  containerButons: {
    height: 48,
  },
});

export default Counter;
