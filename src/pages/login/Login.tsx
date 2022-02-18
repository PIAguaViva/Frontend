import React from 'react';
import {Box, Button, Grid, TextField, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

import './Login.css';

function Login() {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid alignItems='center' xs={6}>
        <Box paddingX={20}>
          <form>
            <Typography className='login-font' variant='h3' gutterBottom color='textPrimary' component='h2' align='center'>Entrar</Typography>
            <TextField id="usuario" label="usuário" variant='outlined'
              name='usuario' margin='normal' fullWidth />

            <TextField id="senha" label="senha" variant='outlined'
              name='senha' margin='normal' type='password' fullWidth />
              <Box marginTop={2} textAlign='center'>
                <Link to='/home' className='text-decorator-none'>
                  <Button className='button' type='submit' variant='contained' >Logar</Button>
                </Link>
              </Box>
          </form>
        </Box>
      </Grid>
      <Grid className='login-bg' xs={6}></Grid>
    </Grid>
  )
}

export default Login