import React, { ChangeEvent, useState, useEffect } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/Actions';
import { toast } from 'react-toastify';

function Login() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const [userLogin, setUserLogin] = useState<UserLogin>(
      {
          id: 0,
          tipoUsuario: '',
          nome: '',
          usuario: '',
          senha: '',
          token: '',
          foto: ''
      }
  )

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
      id: 0,
      tipoUsuario: '',
      nome: '',
      usuario: '',
      senha: '',
      token: '',
      foto: ''
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
      setUserLogin({
          ...userLogin,
          [e.target.name]: e.target.value
      })
  }

      useEffect(() => {
          if (respUserLogin.token !== '') {
              console.log("Token: " + respUserLogin.token)
              console.log("ID: " + respUserLogin.id)

               dispatch(addToken(respUserLogin.token)) 
               dispatch(addId(respUserLogin.id.toString()))   
              history.push('/home')
          }
      }, [respUserLogin.token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
      try {
          await login(`/usuarios/logar`, userLogin, setRespUserLogin)
          toast.success('Usuário logado com sucesso!', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress:undefined,
          });

      } catch (error) {
          toast.error('Seus dados parecem inconsistentes, tente novamente.', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress:undefined,
          });
      }
  }


  return (
    <Grid container className="bgl">

      <Box className='caixaMain'>
        <Box className='caixaLog'>
          <form onSubmit={onSubmit} className='form'>
            <Typography className='form-title' variant='h4'>Entrar</Typography>
             <Box>
              <TextField className='form-input' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="usuario"
                label="usuário"
                name='usuario'
                type='email' />
            </Box>
            <Box>
              <TextField className='form-input' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                label="senha"
                name='senha'
                type='password' />
            </Box>

            <Box marginTop={10} textAlign='center'>
              <Button className='botaoo' type='submit' variant='contained' >Logar</Button>
            </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1} >
              <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
            </Box>
            <Link to='/cadastrousuario'>
              <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
            </Link>
          </Box>
        </Box>
        <Box className='LogBG'>
        </Box>
      </Box>
    </Grid>
  )
}

export default Login