import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Box, Card, CardContent, Typography, MenuItem, IconButton, CardHeader, Avatar, Button } from '@material-ui/core';
import './ListaPostagem.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { UserState } from '../../../store/tokens/UserReducer';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import MarkChatReadOutlinedIcon from '@mui/icons-material/MarkChatReadOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )
  let history = useHistory();

  useEffect(() => {
    if (token == "") {
      toast.info('Você precisa estar logado', {
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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    <MenuItem onClick={handleClose}>Profile</MenuItem>

  ];

  const ITEM_HEIGHT = 48;

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} display='row' justifyContent='flex'>
            <Card variant="outlined">
              <CardContent>

                <Box display='flex' justifyContent='space-between' >
                <Typography color="textSecondary" gutterBottom>
                    Postagens
                  </Typography>

                  <Box display="flex" justifyContent="space-between">
                  

                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="fade-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}

                    >
                      <Link to={`/deletarPostagem/${post.id}`} className='none'>
                        <MenuItem onClick={handleClose}>deletar</MenuItem>
                      </Link>
                      <Link to={`/formularioPostagem/${post.id}`} className="none" >
                        <MenuItem onClick={handleClose}>atualizar</MenuItem>
                      </Link>

                    </Menu>
                  </Box>

                </Box>
                <Box>

                </Box>

                <Box display='flex' justifyContent='row'>
                  <CardHeader
                    avatar={
                      <Avatar src={post.usuario?.foto} alt={post.usuario?.nome}>
                      </Avatar>
                    }
                    title={post.usuario?.nome}
                  />

                </Box>

                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.regiao}
                </Typography>
                <Typography variant="body1" component="p" className='space-text'>
                  {post.texto}
                </Typography>
                <Typography variant="body1" component="p" className='space-text'>
                  <img src={post.foto} />
                </Typography>

                <Typography variant="body2" component="p">
                  Tema: {post.tema?.tema}
                </Typography>
                <Box display="flex" justifyContent="center" >
                  <Box mx={1}>
                    <Button variant="contained" size='small' className="btnDosIcones">
                      <FavoriteBorderOutlinedIcon fontSize='large' />
                    </Button>
                  </Box>
                  <Box mx={1}>
                    <Button variant="contained" size='small' className="btnDosIcones">
                      <MarkChatReadOutlinedIcon fontSize='large' />
                    </Button>
                  </Box>
                  <Box mx={1}>
                    <Button variant="contained" size='small' className="btnDosIcones">
                      <NearMeOutlinedIcon fontSize='large' />
                    </Button>
                  </Box>
                </Box>



              </CardContent>
            </Card>
          </Box>

        ))
      }
    </>
  )
}

export default ListaPostagem;