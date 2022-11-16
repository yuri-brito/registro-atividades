import './App.css';
import{Routes,Route} from 'react-router-dom';
import {Home,Usuarios, UsuariosDetalhes,Atividades,AtividadesDetalhes} from './pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Router path='/atividades' element={<Atividades/>}/>
        <Route path='/:usuario' element={<UsuariosDetalhes/>}/>
        <Route path='/:atividade' element={<AtividadesDetalhes/>}/>
        <Route path='/admin' element={<Usuarios/>}/>
        <Route path='*'/>
        <Route/>
      </Routes>
      
    </div>
  );
}

export default App;
