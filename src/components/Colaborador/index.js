import './styles.css';

const Colaborador = ({imagem, nome, cargo, corFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h2>{nome}</h2>
                <h3>{cargo}</h3>
            </div>
        </div>
    )
}

export default Colaborador;