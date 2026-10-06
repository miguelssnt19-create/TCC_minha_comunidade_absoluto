import './index.css';


export default function Cadastro(){
    return ( 

<div className='site_cada'>
        

        <div className="cadastro">

        <h1>Criar sua conta</h1>

        <p>Preencha seus dados para continuar</p>

        <form>

            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome"/>

            <label>E-mail</label>
            <input type="email" placeholder="Digite seu e-mail"/>

            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha"/>

            <label>Confirmar senha</label>
            <input type="password" placeholder="Confirme sua senha"/>

            <button type="submit">Cadastrar</button>

        </form>

        <p className="final ">
            Já possui uma conta?
            <a href='/entrar'>Entrar</a>
        </p>

    </div>


</div>

    );
}