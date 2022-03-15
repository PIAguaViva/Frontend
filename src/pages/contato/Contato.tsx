import React, { ChangeEvent } from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./Contato.css";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "80ch",
      },
    },
  })
);


export default function Contato() {
  let history = useHistory();
  const classes = useStyles();

  function enviar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log("foi")

    toast.success("E-mail enviado!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });


    back()

  }

  function back() {
    history.push('/home')
  }



  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className='center-content'>
      <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' textAlign='center' flexWrap='wrap'>
      <Typography
            variant="h3"
            className="titulo2"
            component="h3"
            align="center"
          >
            Fale conosco
          </Typography>

        <Box justifyContent='center' alignItems='center' textAlign='center' width='42.5%'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488661539!2d-46.87549743438984!3d-23.681531449872665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1646775743647!5m2!1spt-BR!2sbr"
            className='maps'></iframe>
        </Box>

        <Box flexDirection='column' justifyContent='center' alignItems='center' textAlign='center' className='testMargin' width='47.5%'>
          <Box flexDirection='column' justifyContent='center' alignItems='center' textAlign='center'>
          <form action='https://formsubmit.co/projetointegradorgen@gmail.com' method='POST' className={classes.root + ' form-contato'}  noValidate>

            <input type='hidden' name='_next' value='https://pi-agua-viva.vercel.app/'></input>
            {/* <input type='hidden' name='_captcha' value='false'></input> */}
            <input type='hidden' name='_autoresponse' value='Recebemos sua mensagem, obrigado pelo contato e logo responderemos!'></input>


            <input
              className="caixaLog1"
              type='text'
              name='name'
              placeholder="Nome"
              required
            />
            <input
              className="caixaLog1"
              type='email'
              name='email'
              placeholder="E-mail"
              required

            />

            <input
              className="caixaLog1"
              type='text'
              name='subject'
              placeholder="Assunto"
              required

            />
            <textarea
              className="caixaLog2"
              name='message'
              placeholder='Mensagem'

            />

            <Box marginTop={2} textAlign="center" id='button-container'>
              <Link to="/home" className="text-decorator-none">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnCancelar"
                >
                  Cancelar
                </Button>
              </Link>

              <Button type="submit" variant="contained" style={{ backgroundColor: "#673AB7", color: "white" }} className="bntE">
                Enviar
              </Button>

            </Box>
          </form>
          </Box>
        </Box>

      </Box>

    </Grid>
  );
}