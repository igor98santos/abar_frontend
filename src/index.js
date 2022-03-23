import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Apresentacao from './Components/Entrada/Entrada'
import PerfilUser from './pages/PerfilUser'
import Feed from './Components/LayoutFeed/LayoutFeed'
import Config from './Components/zConfig/Configuracao'
import Amigos from './Components/Amigos/Amigos'
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import CriarPublicacao from './Components/AcaoPublic/CriarPublicacao'
import GetPost from './Components/AcaoPublic/GetPost'
import PutOrDeletePublicacao from './Components/AcaoPublic/PutOrDeletePosts'
 
ReactDOM.render(
  <React.StrictMode>
  <Router>
        <Routes>
            <Route path="/" element={<Apresentacao/>}exact></Route>
            
            <Route path="/perfil" element={<PerfilUser/>}exact></Route>
            <Route path="/Feed" element={<Feed/>}exact></Route>
            <Route path="/Config" element={<Config/>}exact></Route>
            <Route path="/Amigos" element={<Amigos/>}exact></Route>
            <Route path="/Cadastro" element={<Cadastro/>}exact></Route>
            <Route path="/Login" element={<Login/>}exact></Route>
            <Route path="/createpub" element={<CriarPublicacao/>}exact></Route>
            <Route path="/publicacao" element={<GetPost/>}exact></Route>
            <Route exact path="/PutDeletePublicacao" element={<PutOrDeletePublicacao/>} />
          <Route exact  path="/createpub-Update/:id" element={<CriarPublicacao/>}/>
        </Routes>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



