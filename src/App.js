import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import prottos from './images/prottos.png';
import terran from './images/terran.png';
import zerg from './images/zerg.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const logos = [terran, prottos, zerg];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src={logos[getRandomInt(0,2)]} alt="logo" width="50" height="50" />
          <Typography ml="1" variant="h6" className={classes.title}>
            StarCraftReplays
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Mis Replays</Button>
          <Button color="inherit">Jugadores</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}



