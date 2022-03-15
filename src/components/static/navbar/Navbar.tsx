import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/UserReducer';
import { addToken } from '../../../store/tokens/Actions';
import {toast} from 'react-toastify';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Navbar() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''))
        toast.info("Usuário deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if(token !== ""){
        navbarComponent = 
        
        <AppBar position="static" className="barColor">
            <Toolbar variant="dense">
                <Link to="/home">
                <img src="https://i.imgur.com/JWDBXKj.png[/img]"/>
                </Link>
                    <Grid item xs={10}>
                        <Box display="flex" justifyContent="start">
            
                            <Link to="/home" className='text-decorator-none'>
                            <Box mx={2} className='cursor'>
                                <Typography variant="h6" className='barText'>
                                    Página Inicial
                                </Typography>
                            </Box>
                            </Link>
                            <Link to="/feed" className='text-decorator-none'>
                            <Box mx={2} className='cursor'>
                                <Typography variant="h6" className='barText'>
                                    Postagens
                                </Typography>
                            </Box>
                            </Link>
                            <Link to="/about-us" className='text-decorator-none'>
                            <Box mx={2} className='cursor'>
                                <Typography variant="h6" className='barText'>
                                    Sobre Nós
                                </Typography>
                            </Box>
                            </Link>
                            {/* <Link to="/temas" className='text-decorator-none'>
                            <Box mx={2} className='cursor'>
                                <Typography variant="h6" className='barText'>
                                    Temas
                                </Typography>
                            </Box>
                            </Link>
                            <Link to="/formularioTema" className='text-decorator-none'>
                            <Box mx={2} className='cursor'>
                                <Typography variant="h6" className='barText'>
                                    Cadastrar tema
                                </Typography>
                            </Box>
                            </Link> */}
                            <Link to="/contato" className='text-decorator-none'>
                            <Box mx={2} className='cursor'>
                                <Typography variant="h6" className='barText'>
                                    Contato
                                </Typography>
                            </Box>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box  className='cursor' onClick={goLogout} display="flex" justifyContent="end">
                            <Typography variant="h6" className='barLogout'>
                            <ExitToAppIcon style={{ fontSize: 30, color: "white", marginTop:10}}/>
                            </Typography>
                        </Box>    
                    </Grid>
          
        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;