import './index.css';

export default function Entrar(){
    return(
    <div className='site_ent'>
            <div className="login">
        <h1>Entrar</h1>

        <form>
            <label>E-mail</label>
            <input type="email" placeholder="Digite seu e-mail"/>

            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha"/>

            <button type="submit">Entrar</button>
        </form>

        <p>Não tem uma conta? <a className="#">Criar conta</a></p>
    </div>


    </div>
    );
}