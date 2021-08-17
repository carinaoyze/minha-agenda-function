import React, {useState} from 'react';

export default function Formulario({adicionarContatoCallback}) {
    const [nome, setNome] = useState(''); //retorna o valor do estado no momento e a função da atualização do estado
    const [tel, setTelefone] = useState('');
    let isBotaoDisable = !nome || !tel;

    const handleForm = (e) => {
        e.preventDefault();
        adicionarContatoCallback( nome, tel );
        setNome('');
        setTelefone('');
    }

    return (
        <div className="card mb-3 p-3">
                <form onSubmit = { handleForm } className="row">
                    <div className="form-group col-md-5">
                        <label>Nome:</label>
                            <input type="text" value={ nome } onChange={(e)=> setNome(e.target.value)} className="form-control" placeholder="Digite o nome do contato" />
                            { !nome && <span className = "text-danger">Nome é obrigatório</span> }
                    </div>
                    <div className="form-group col-md-5">
                        <label>Telefone:</label>
                        <input type="tel" value= { tel } onChange={(e)=> setTelefone(e.target.value)} className="form-control" placeholder="Digite o telefone do contato" />
                        { !tel && <span className = "text-danger">Telefone é obrigatório</span>}
                    </div>
                    <div className="form-group col-md-2 mt-3 text-center">
                        <button disabled= { isBotaoDisable } className="btn btn-primary btn-lg mt-2 w-100">
                            Salvar
                        </button> 
                    </div>
                </form>
        </div>
    )
}
