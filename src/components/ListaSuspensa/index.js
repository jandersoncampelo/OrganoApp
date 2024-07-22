import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterar(evento.target.value)} 
                    required={props.required}
                    value={props.valor}
            >
                <option value=""></option>
                {props.itens.map(item =>{ return <option key={item}>{item}</option> })}
            </select>
        </div>
    );
}
export default ListaSuspensa;


/* v1
const ListaSuspensa = () => {
    return (
        <select>
            <option value="1">Opção 1</option>
            <option value="2">Opção 2</option>
            <option value="3">Opção 3</option>
        </select>
    );
}
*/



/* v3 (Copilot)
const ListaSuspensa = ({ label, options }) => {
    return (
        <select>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}
*/

