import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    regiao: string;
    texto: string;
    tema?: Tema| null
}

export default Postagem;