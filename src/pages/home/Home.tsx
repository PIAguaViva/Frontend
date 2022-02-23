import React from 'react'
import {Typography, Box, Grid, Button} from '@material-ui/core';

import './Home.css';

function Home() {
  return (
    <>
        <Grid className='homeBg' container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box className='card' paddingX={10} width={340} height="35vh" borderRadius={5} marginTop={12} paddingTop={12} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Sinta-se à vontade para expressar os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='button'>Ver Postagens</Button>
                    </Box>
                </Grid>
                {/* <Grid item xs={6} >
                    <img className='homeBg' alt="Imagem de gota"/>
                </Grid> */}
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
    </>
  )
}

export default Home