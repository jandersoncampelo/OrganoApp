import './style.css';

const Botao = (props) => {
    return (
        <button className="botao">
            {props.children}
        </button>
    );
}

export default Botao;

/* Copilot Version:
const Botão = ({ children, onClick }) => {
    return (
        <button className="botão" onClick={onClick}>
            {children}
        </button>
    );
}
*/