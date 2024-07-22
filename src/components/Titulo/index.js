// Podemos criar componentes utilizando Classes do ES6.
// Para isso, criamos uma classe que estende a classe Component do React.
// O método render() é obrigatório e deve retornar o JSX que será renderizado
// pelo componente
// A propriedade children é especial e representa o conteúdo entre as tags
// do componente no JSX
// https://pt-br.react.dev/reference/react/Component#defining-a-class-component
// https://pt-br.react.dev/docs/composition-vs-inheritance
// https://cursos.alura.com.br/course/javascript-orientacao-a-objetos

import React from 'react';
import './Titulo.css';

class Titulo extends React.Component {
    render() {
        return (
            <div className="titulo">
                <h2>{this.props.children}</h2>
            </div>
        );
    }
}

export default Titulo;