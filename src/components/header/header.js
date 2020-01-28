import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';
import logoMma from '../../pages/assets/img/logoMMA.png';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { logado } = this.props;
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <img
              style={{
                height: '34px',
                position: 'relative',
                top: '-5px',
                left: '10px',
              }}
              src={logoMma}
              alt="logoMMA"
            />
          </div>
          <div style={{ width: 29 }} />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">
                Página Principal <span className="sr-only">(current)</span>
              </a>
            </div>
          </div>

          <div>
            {' '}
            <Link to="/login">
              <MaterialIcon icon="account_circle" size={50} />{' '}
            </Link>
          </div>
        </nav>

        {logado ? (
          <div>
            <nav
              className="navbar navbar-expand-lg navbar-dark"
              style={{ backgroundColor: '#136235', padding: '2px' }}
            >
              <a className="navbar-brand" id="a" href="/painel">
                Painel de gestão
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Trocar perfil
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Sair <span className="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        ) : null}
      </>
    );
  }
}

export default Header;
