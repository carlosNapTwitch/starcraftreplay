import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '35px'
    },
}));

const VideoCard = () => {
    const classes = useStyles();

    const videoIds = [
        'azhpEHcwzMQ',
        'v_n714w5OlU',
        'GALCxe_40V4',
        '5dIkDgtJI70',
        '-1Zed5W0oys',
        '2caksngDICY',
    ]

    return (

        <Grid container justify="flex-start" spacing={2} className={classes.root}>
            {
                videoIds.map( (item, idx) => (
                    <Grid item xs={4} key={idx+'_video'}>
                        <Box>
                            <iframe allowfullscreen="allowfullscreen" width="320" height="215" src={`https://www.youtube.com/embed/${item}?controls=1`} frameborder="0"></iframe>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default VideoCard