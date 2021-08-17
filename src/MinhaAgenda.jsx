import React, { useState } from 'react';
import Cabecalho from './components/cabecalho';
import Container from './components/Container';
import Formulario from './components/Formulario';
import TabelaContato from './components/TabelaContato';

export default function MinhaAgenda() {
    const [contatos, setContatos] = useState([]);

    const adicionarContato = (nome, telefone) => {
        const contatoInfo = { nome, telefone }
        contatos.push(contatoInfo);
        setContatos([...contatos]); // spreadoperator ...
    }

    const excluirContato = (indice) => {
        contatos.splice(indice, 1);
        setContatos([...contatos]);
    }

    return(
        <>
            <Cabecalho titulo="Agenda da Carina" texto="Confira abaixo sua lista de contatos cadastrados."/>
            <Container>
                <Formulario adicionarContatoCallback = { adicionarContato } />
            </Container>
            <Container>
               <TabelaContato excluirContatoCallback = { excluirContato } listaContatos = { contatos } />
            </Container>
        </>
    );
}
