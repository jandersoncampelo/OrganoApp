import Colaborador from '../Colaborador';
import './style.css';

const Time = (props) => {
    const css = {
        backgroundColor: props.corSecundaria
    }

    return (
        props.colaboradores.length === 0 ? null :
        <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>

                {props.colaboradores.map(colaborador => 
                    <Colaborador key={colaborador.nome} corFundo={props.corPrimaria} {...colaborador} />)
                }
            </div>
        </section>
    )};

export default Time;