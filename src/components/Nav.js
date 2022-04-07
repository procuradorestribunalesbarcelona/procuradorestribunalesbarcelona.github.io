import React from 'react';
import { Link } from 'gatsby';
import config from '../../config';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">{config.menu_item01}</Link>
              </li>
              <li>
                <Link to="/#presentacion">Presentación</Link>
              </li>
              <li>
                <Link to="/#equipo">Equípo</Link>
              </li>
              <li>
                <Link to="/#partidos-judiciales">Partidos judiciales</Link>
              </li>
              <li>
                <Link to="/Servicios">Servicios</Link>
              </li>
              <li>
                <Link to="/Enlaces">{config.menu_item02}</Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
