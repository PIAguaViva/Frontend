import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import {toast} from 'react-toastify'

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
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
        navbarComponent = <AppBar position="static" className="barColor">
        <Toolbar variant="dense">
        <img src="https://i.imgur.com/JWDBXKj.png[/img]"/>
            <Box display="flex" justifyContent="start">
                <Link to="/home" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" className='barText'>
                        Home
                    </Typography>
                </Box>
                </Link>
                <Link to="/about-us" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" className='barText'>
                        Sobre Nós
                    </Typography>
                </Box>
                </Link>
                <Link to="/temas" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" className='barText'>
                        Temas
                    </Typography>
                </Box>
                </Link>
                <Link to="/formularioTema" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" className='barText'>
                        Cadastrar tema
                    </Typography>
                </Box>
                </Link>
                <Link to="/contato" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" className='barText'>
                        Contato
                    </Typography>
                </Box>
                </Link>
            </Box>
            <Box mx={1} className='cursor' onClick={goLogout} display="flex" justifyContent="end">
                        <Typography variant="h6" className='barLogout'>
                            Logout
                        </Typography>
                    </Box>
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