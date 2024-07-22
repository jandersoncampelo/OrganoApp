import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Titulo from '../Titulo';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulário enviado =>', { nome, cargo, imagem, time });

        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className="formulario">
            <form onSubmit={handleSubmit}>
                <Titulo>Preencha os dados para criar o card do colaborador:</Titulo>
                <CampoTexto 
                    label="Nome" 
                    obrigatorio={true} 
                    placeholder="Digite o seu nome" 
                    valor={nome}
                    aoAlterar={ valor => setNome(valor) } />
                <CampoTexto 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    valor={cargo}
                    aoAlterar={ valor => setCargo(valor) } />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterar={ valor => setImagem(valor) } />

                <ListaSuspensa 
                    obrigatorio={true}
                    label="Times" 
                    itens={props.times} 
                    valor={time}
                    aoAlterar={ valor => setTime(valor) }/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;