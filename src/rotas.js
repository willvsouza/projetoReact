import React from 'react';

import AlteracaoSalarial from './views/alteracao-salarial';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/alteracao-salarial' element={<AlteracaoSalarial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
