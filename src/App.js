import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import prottos from './images/prottos.png';
import terran from './images/terran.png';
import zerg from './images/zerg.png';
import SearchForm from './components/searchForm/searchform';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: '5px',
    marginRight: '70px'
  },
  toolbar: {
    backgroundColor: '#ffffff14',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [logo, setLogo] = useState(null)

  useEffect(() => {
    setLogo(getRandomInt(0,2))
  }, [])

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const logos = [terran, prottos, zerg];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.toolbar}>
        <Toolbar>
          <img src={logos[logo]} alt="logo" width={logo === 1 ? 30 : 45} height="45" />
          <Typography ml="1" variant="h6" className={classes.title}>
            StarCraftReplays
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Mis Replays</Button>
          <Button color="inherit">Jugadores</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <SearchForm />
    </div>
  );
}



