import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { lightBlue, grey } from '@material-ui/core/colors';

import {
    makeStyles,
    withStyles
  } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '7px'
    },
    form: {
        marginTop: '7px',
        color: '#fff',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'even'
    },
    input: {
        marginRight: '25px'
    }
}));

const FormButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(grey[700]),
      backgroundColor: lightBlue[500],
      '&:hover': {
        backgroundColor: lightBlue[700],
      },
    },
  }))(Button);

const SearchFrom = () => {
    const classes = useStyles();
    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container justify="center" className={classes.root} spacing={2}>
                    <Grid item xs={12} >
                        <Box>
                            <form className={classes.form} noValidate autoComplete="off" >
                                <TextField className={classes.input} label="Nombre Jugador" />
                                <TextField className={classes.input} label="Nombre torneo" />
                                <FormButton size="small">Buscar</FormButton>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

export default SearchFrom;