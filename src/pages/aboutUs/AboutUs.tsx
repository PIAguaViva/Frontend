import React from 'react';

import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <Box className='fundo'>
        <Box paddingX={20} className="box">
          <Grid className="container2">
            <Grid item xs={9}>
              <Typography variant="h3" className="sobre">Sobre nós</Typography>
              <Typography variant="h6" className="texto">Somos desenvolvedores que visando a qualidade de vida das gerações futuras, decidimos começar mudando o presente.</Typography>

              <Typography variant="h6" className="texto">Pensando na ODS-6, Água limpa e saneamento, que visa garantir disponibilidade e manejo sustentável de água e saneamento para todos, nós criamos uma rede social que busca interação entre professores e alunos desenvolvendo o conhecimento de todos. </Typography>

              <Typography variant="h6" className="texto">O Projeto Água Viva tem como objetivo unir educação e ideias em beneficio da população, ensinando desde jovem como pode ser divertido e fácil racionalizar água e melhorar a qualidade de vida com a reciclagem.</Typography>
            </Grid>

            <Grid item xs={3}>
              <img src="https://i.imgur.com/I78goyc.png" width="170" height="170" className='imagem' />
            </Grid>

          </Grid>
        </Box>

        <Box paddingX={20} className='alinha'>
          <Grid className="container">
            <Grid item xs={12}>
              <Typography className="time" variant="h3">Nosso time</Typography>
            </Grid>
            <Grid item xs={4} className='alinhar'>
              <div id="passar_mouse">
                <img src="https://i.imgur.com/UTztJDV.png" width="150" height="150" />
                <div id="mostrar">Amanda, com 30 anos e espírito aventureiro, é uma mulher curiosa, que antes de entrar no mundo da tecnologia, se desenvolveu em logística e hotelaria. Fala inglês e começou a aprender coreano. Comunicativa, divertida, gosta de ajudar os amigos e resolver problemas, busca se realocar no mercado tech.</div></div>
                <a href="https://github.com/Mandydoncel" target="_blank" rel="noreferrer" >
                <GitHubIcon style={{ fontSize: 27, color: "white" }} className='logog' />
              </a>
              <a href="https://www.linkedin.com/in/amanda-doncel/" target="_blank" rel="noreferrer" >
                <LinkedInIcon style={{ fontSize: 30, color: "white" }} className='logo' />
              </a>
            </Grid>
            <Grid item xs={4} className='alinhar'>
              <div id="passar_mouse">
                <img src="https://i.imgur.com/49wY73O.png" width="150" height="150" />
                <div id="mostrar">Cleyfson Angelo 25 anos, apaixonado por esportes e também por filmes de drama, formado como desenvolvedor junior através da GeneratonBrasil e também licenciado em história pela Uninove. Proativo, ama trabalhar em equipe e participar com o grupo , sempre buscando aprender coisas novas.</div></div>
                <a href="https://github.com/Cleyf" target="_blank" rel="noreferrer" >
                <GitHubIcon style={{ fontSize: 27, color: "white" }} className='logog' />
              </a>
              <a href="https://www.linkedin.com/in/cleyf/" target="_blank" rel="noreferrer" >
                <LinkedInIcon style={{ fontSize: 30, color: "white" }} className='logo' />
              </a>
            </Grid>
            <Grid item xs={4} className='alinhar'>
              <div id="passar_mouse">
                <img src="https://i.imgur.com/1EV9fty.png" width="150" height="150" />
                <div id="mostrar">Sou o Evandro, tenho 31 anos, formado recentemente como desenvolvedor Fullstack em Java pela Generation Brasil. Busco sempre aperfeiçoar meus conhecimentos técnicos através de cursos e vídeos. Gosto de ajudar meus colegas, trocando informações e ouvindo opiniões, atrás sempre da melhor resolução.</div></div>
                <a href="https://github.com/eesvans" target="_blank" rel="noreferrer" >
                <GitHubIcon style={{ fontSize: 27, color: "white" }} className='logog' />
              </a>
              <a href="https://www.linkedin.com/in/eesvans/" target="_blank" rel="noreferrer" >
                <LinkedInIcon style={{ fontSize: 30, color: "white" }} className='logo' />
              </a>
            </Grid>
            <Grid item xs={3} className='alinhar'>
              <div id="passar_mouse">
                <img src="https://i.imgur.com/VWdWENY.png" width="150" height="150" />
                <div id="mostrar">Sou o Raif, tenho 25 anos, formado como desenvolvedor Fullstack em Java pela Generation Brasil. Gosto de criar coisas novas e entender como elas funcionam. Prefiro sempre trabalhar em equipe, pois me ensina muito sobre comunicação e resiliência. Atualmente continuo estudando novas tecnologias.</div></div>
                <a href="https://github.com/Raaaif" target="_blank" rel="noreferrer" >
                <GitHubIcon style={{ fontSize: 27, color: "white" }} className='logog' />
              </a>
              <a href="https://www.linkedin.com/in/raaaif/" target="_blank" rel="noreferrer" >
                <LinkedInIcon style={{ fontSize: 30, color: "white" }} className='logo' />
              </a>
            </Grid>
            <Grid item xs={3} className='alinhar'>
              <div id="passar_mouse">
                <img src="https://i.imgur.com/aFMXsKS.png" width="150" height="150" />
                <div id="mostrar">Sabrina Moura Gandra, 21 anos, interessada por arte adora ir ao teatro/cinema. É estudante de Análise e Desenvolvimento de Sistemas e recém formada Desenvolvedora Java Full Stack pela Generation. Sue interesse pela tecnologia surgiu através da sua curiosidade e vontade de aprender.</div></div>
              <a href="https://github.com/Brinamg" target="_blank" rel="noreferrer" >
                <GitHubIcon style={{ fontSize: 27, color: "white" }} className='logog' />
              </a>
              <a href="https://www.linkedin.com/in/sabrinamouragandra" target="_blank" rel="noreferrer" >
                <LinkedInIcon style={{ fontSize: 30, color: "white" }} className='logo' />
              </a>
            </Grid>
            <Grid item xs={3} className='alinhar'>
              <div id="passar_mouse">
                <img src="https://i.imgur.com/hpDV5Oz.png" width="150" height="150" />
                <div id="mostrar">Scarlatt, com 24 anos e ama ficção científica. Uma pessoa não binária. Desmontou eletrônicos e brinquedos quando menor para descobrir como funcionavam. Fala inglês, é comunicative, proative, ama desafios e planejar soluções. Desenvolvedore Java FullStack em busca de uma oportunidade na área tech.</div></div>
                <a href="https://github.com/Scarlatt-Luz" target="_blank" rel="noreferrer" >
                <GitHubIcon style={{ fontSize: 27, color: "white" }} className='logog' />
              </a>
              <a href="https://www.linkedin.com/in/scarlatt-luz/" target="_blank" rel="noreferrer" >
                <LinkedInIcon style={{ fontSize: 30, color: "white" }} className='logo' />
              </a>
            </Grid>
            <Grid item xs={3} className='alinhar'>
              <div id="passar_mouse">
                <img src="https://i.imgur.com/UKvUkC8.png" width="150" height="150" />
                <div id="mostrar">Olá! Eu sou a Vicky, tenho 23 anos e sou extremamente curiosa, brincalhona, calma e que gosta de ajudar. Tenho uma enorme paixão por tecnologia e trabalhar nesse projeto, além de aumentar isso, me proporcionou adquirir habilidades e conhecimentos, que com certeza me ajudarão nessa nova jornada!</div></div>
                <a href="https://github.com/Vicky-Silva" target="_blank" rel="noreferrer" >
                <GitHubIcon style={{ fontSize: 27, color: "white" }} className='logog' />
              </a>
              <a href="https://www.linkedin.com/in/vitoria-gomes-da-silva/" target="_blank" rel="noreferrer" >
                <LinkedInIcon style={{ fontSize: 30, color: "white" }} className='logo' />
              </a>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default AboutUs