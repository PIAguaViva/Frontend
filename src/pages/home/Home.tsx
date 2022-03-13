import React, { useEffect } from 'react';
import { Box, Grid, Button } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { UserState } from '../../store/tokens/UserReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CarouselComponent from '../../components/carousel/CarouselComponent';


function Home() {

    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token === "") {
            toast.info("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" className='ft'>
                    <Grid item xs={12}>
                        <CarouselComponent/>
                    </Grid>
                </Grid>
        </>
    );
}

export default Home;