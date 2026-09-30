import './index.css';
import App from './pages/app/App.js';
import Cadastro from './pages/cadastrar/index.jsx';
import Entrar from './pages/entrar/index.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function Router() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/entrar' element={<Entrar />} />
        </Routes>  
    </BrowserRouter>
    );
}