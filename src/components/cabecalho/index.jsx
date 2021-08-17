import React from 'react';
import cabelhoStyles from './cabecalho.module.css';

export default function Cabecalho({titulo, texto}) { //desestrutura pra props direto
    return (
        <div className={`jumbotron ${cabelhoStyles.cabecalho}`}>
            <h1 className="display-4">{ titulo }</h1>
            <p className="lead">
                { texto }
            </p>
        </div>
    );
}
