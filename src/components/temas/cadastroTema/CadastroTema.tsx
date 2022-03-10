import React, {useState, useEffect, ChangeEvent} from 'react'
import {useHistory, useParams } from 'react-router-dom'

import { Container, Typography, TextField, Button } from "@material-ui/core"

import './CadastroTema.css'
import Tema from '../../../models/Tema'
import { buscaId, post, put } from '../../../services/Service'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/TokensReducer'
import { toast } from 'react-toastify'


function CadastroTema() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const [tema, setTema] = useState<Tema>({
        id: 0,
        tema: '',
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedTema(e: ChangeEvent<HTMLInputElement>) {

            setTema({
                ...tema,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            
    
            if (id !== undefined) {
                put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success("Tema atualizado com sucesso", {
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
                post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                console.log(tema)
                toast.success("Tema cadastrado com sucesso", {
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
            back()
    
        }
    
        function back() {
            history.push('/temas')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form className='formtema' onSubmit={onSubmit}>
                <Typography className='topo2' variant="h4" component="h3" align="center" >Cadastre um Tema</Typography>
               
                <TextField  value={tema.tema} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} 
                id="tema" label="tema" variant="outlined" name="tema" margin="normal" fullWidth />
                
                <TextField value={tema.descricao} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} 
                id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />

                <Button className='finalizar' type="submit" variant="contained" >
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema