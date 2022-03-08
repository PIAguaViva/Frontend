import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import './CadastroUsuario.css';
import { cadastroUsuario } from '../../services/Service';
import User from '../../models/User';
import { toast } from 'react-toastify';

function CadastroUsuario() {
    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            tipoUsuario: '',
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            tipoUsuario: '',
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success("Usuário cadastrado com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.info("Dados inconsistentes. Favor verificar as informações de cadastro.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    return (
        (
            <Grid container className='LogBG2'>

                <Box className='caixaMain'>
                    <Box className='cadastroBG'>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                        </Box>
                    </Box>
                    <Box className='caixaCad'>
                        <form onSubmit={onSubmit} className='formCad' >
                            <Typography variant='h4' className='titleCad'>Cadastrar</Typography>
                            <TextField value={user.tipoUsuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='tipoUsuario'
                                label='tipoUsuario'
                                name='tipoUsuario'
                                margin='normal'
                                required />

                            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='nome'
                                label='nome'
                                name='nome'
                                margin='normal'
                                required />

                            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='usuario'
                                label='usuario'
                                name='usuario'
                                margin='normal'
                                required placeholder='Exemplo: user@email.com' />

                            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='senha'
                                label='senha'
                                name='senha'
                                margin='normal'
                                type='password'
                                required placeholder='Mínimo 8 caracteres' />

                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                                id='confirmarSenha'
                                label='confirmarSenha'
                                name='confirmarSenha'
                                margin='normal'
                                type='password'
                                required placeholder='Mínimo 8 caracteres' />

                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' color='secondary' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Grid>
        )
    )
}

export default CadastroUsuario;