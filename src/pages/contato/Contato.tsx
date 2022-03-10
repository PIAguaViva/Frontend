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
        width: "60ch",
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
    <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488661539!2d-46.87549743438984!3d-23.681531449872665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1646775743647!5m2!1spt-BR!2sbr"
        className='maps'></iframe>

      <Grid item xs={6} alignItems="flex-start">

        <Box paddingX={8} className='caixaTitulo'>
          <Typography
            variant="h3"
            className="titulo2"
            component="h3"
            align="center"
          >
            Fale conosco
          </Typography>

          <form onSubmit={enviar} className={classes.root} noValidate autoComplete="off">
            <TextField
              className="caixaLog1"
              id="outlined-multiline-flexible"
              label="Nome"
              multiline
              maxRows={4}
              variant="outlined"
            />
            <TextField
              className="caixaLog1"
              id="outlined-multiline-static"
              label="Email"
              placeholder="user@email.com"
              multiline
              variant="outlined"
            />
            <TextField
              className="caixaLog2"
              id="outlined-textarea"
              label="Assunto"
              multiline
              rows={4}
              variant="outlined"
            />

            <Box marginTop={2} textAlign="center">
              <Link to="/home" className="text-decorator-none">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnCancelar"
                >
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained" color="primary" className="bntE">
                Enviar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}