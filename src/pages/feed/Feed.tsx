import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import User from '../../models/User';

import './Feed.css';
import Avatar from '@mui/material/Avatar';
import { UserState } from '../../store/tokens/UserReducer';
import { buscaId } from '../../services/Service';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';


function Feed() {

    let history = useHistory()

    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,
        tipoUsuario: '',
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])

    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])


    return (
        <Grid container justifyContent="center" >
            <Grid xs={4} className='card-principal' justifyContent="center" alignItems="center" >
                <Box className='card-container-imagem' display='flex' flexDirection="row">
                    <Avatar className='card-imagem'
                        src={user.foto}
                        alt={user.nome}
                     />
                        <Typography className="txt-branco" variant='h5'>{user.nome}</Typography>
                    <Typography className="txt-branco">{user.tipoUsuario}</Typography>

                    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
                    <Box display='flex' flexDirection='column' width="50%" alignItems='center' justifyContent='center'>
                    <Box display='flex' flexDirection='row'>
                    <img src="https://i.imgur.com/ydP8spn.png[/img]" alt=""/>
                    <Typography className='b01 txt-branco'>seguindo </Typography>
                    </Box>
                    <Typography className='b03 txt-branco'>000</Typography>
                    
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Box display='flex' flexDirection='row'>
                    <img src="https://i.imgur.com/GPMs0ej.png[/img]" alt="" />
                    <Typography className="b02 txt-branco">seguidores </Typography>
                    </Box>
                        <Typography className="txt-branco">000</Typography>
                    </Box>
                    </Box>
                </Box>
                
            </Grid>
            <Grid xs={6} className='capa'>

            </Grid>
            <Grid xs={10} className='postagens' justifyContent="center" alignItems="center" >
                <Box paddingX={20} justifyContent='center'>
                    <Typography variant="h6" gutterBottom  component="h6" align="center" className="txt-branco" >Comece uma nova publicação:</Typography>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1} className='btnModal' >
                            <ModalPostagem />
                        </Box>
                        <Box>
                            <Link to="/temas" className='text-decorator-none'>
                            <Box mx={2} className='cursor'>
                                <Typography variant="h6" className='barText'>
                                    <Button type="submit" variant="contained" className="btnModal">
                                    Temas
                                    </Button>
                                </Typography>
                            </Box>
                            </Link>
                            </Box>
                            <Box>
                            
                            <Link to="/formularioTema" className='text-decorator-none'>
                            <Box mx={2} className='cursor'>
                                <Typography variant="h6" className='barText'>
                                    <Button type="submit" variant="contained" className="btnModal">
                                    Cadastrar tema
                                    </Button>
                                </Typography>
                            </Box>
                            </Link>
                        </Box>

                    </Box>
                </Box>

                <ListaPostagem />
            </Grid >
        </Grid>

    )
}

export default Feed
