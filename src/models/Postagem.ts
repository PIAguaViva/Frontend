import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    regiao: string;
    texto: string;
    foto: string;
    tema?: Tema| null
}

export default Postagem;