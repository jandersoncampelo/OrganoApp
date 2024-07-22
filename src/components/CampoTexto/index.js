import './CampoTexto.css';

const CampoTexto = ({ label, obrigatorio, placeholder, valor, aoAlterar }) => {
    
    const aoDigitar = (evento) => {
        aoAlterar(evento.target.value);
    }

    return (
        <div className="campo-texto">
        <label>{label}</label>
        <input type="text"  value={valor} required={obrigatorio} placeholder={placeholder} onChange={aoDigitar} />
        </div>
    );
}

export default CampoTexto;