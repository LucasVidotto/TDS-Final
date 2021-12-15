import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page from '../pages/public/index';
import Contact from '../pages/contact/contact';
import Publicar from '../pages/post/index';
import Membros from '../pages/private/membro';
import Card from '../cards/cards';
import Home from '../pages/home/home';
import Pesquisa from '../pages/search/search';
import Login from '../../components/pages/Log/index';


export default function Routers(){
    return(
        <Router>
                <Routes>
                    <Route  path="/"  element={< Page />} />
                    <Route  path="/publicacao"  element={<Publicar />} />
                    <Route path="/contato" element={<Contact />}/>
                    <Route path="/membros" element={<Membros />}/>
                    <Route path="/pesquisa" element={<Pesquisa />} />
                    <Route path="/card" element={<Card />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/login" element={<Login />} />
                </Routes>
        </Router>
    );
}
