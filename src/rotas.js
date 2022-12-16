import React from 'react';

import AlteracaoSalarial from './views/alteracao-salarial';
import AlteracaoJornadaTrabalho from './views/alteracao-jornada-trabalho';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/alteracao-jornada-trabalho' element={<AlteracaoJornadaTrabalho />} />
        <Route path='/alteracao-salarial' element={<AlteracaoSalarial />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
