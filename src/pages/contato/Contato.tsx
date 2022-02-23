import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './Contato.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

export default function Contato() {
    const classes = useStyles();

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem3'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10} >
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'>Fale conosco</Typography>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Nome"
                            multiline
                            maxRows={4}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Email"
                            placeholder="user@email.com"
                            multiline
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Assunto"
                            multiline
                            rows={4}
                            variant="outlined"
                        />
                        
                    </form>
                    <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Enviar
                            </Button>
                        </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

