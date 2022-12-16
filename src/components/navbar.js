import React from 'react';

import NavbarItem from './navbarItem';

function Navbar(props) {
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          Meu Sistema
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/alteracao-jornada-trabalho'
              label='Alteração de Jornada de Trabalho'
            />
            <NavbarItem
              render='true'
              href='/alteracao-salarial'
              label='Alteração Salarial'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
