import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';
import logoCnuc from '../assets/img/cnuc.png';
import validateReset from './resetValidation';

import AlertModal from '../../components/modal/alertModal';

const cpfMask = value =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      errors: {},
      isLoading: false,
      showAlertModal: false,
      showSucessModal: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSucessClose = this.handleSucessClose.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.setState({ showSucessModal: true });
    }
  }

  onChange(evt) {
    evt.preventDefault();
    const { target } = evt;
    const { value } = target;
    const { name } = target;

    if (target.type === 'text') {
      this.setState({ [name]: cpfMask(evt.target.value) });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleAlertClose() {
    // fechar modal
    this.setState({ showAlertModal: false });
  }

  handleSucessClose() {
    // fechar modal
    this.setState({ showSucessModal: false });
  }

  isValid() {
    const { errors, isValid } = validateReset(this.state);

    if (!isValid) {
      // when has errors
      this.setState({ errors });
      if (errors.wrongUsername) {
        this.setState({ showAlertModal: true }); // abre modal se nome, senha ou ambos estiverem incorretos
      }
    }
    return isValid;
  }

  render() {
    const { errors, username, showAlertModal } = this.state;

    return (
      <>
        <div className="loginBody">
          <div className="container">
            <div className="btn_Close" style={{ textAlign: 'right' }}>
              <Link to="/" className="textMenu">
                <MaterialIcon icon="clear" color="gray" size={30} />
              </Link>
            </div>
            <div className="row">
              <div className="col-sm-3" />

              <div className="col-sm-6">
                <div className="container-fluid" style={{ textAlign: 'center' }}>
                  <img
                    style={{ width: '300px', maxWidth: '100%', height: 'auto' }}
                    src={logoCnuc}
                    alt="logoCnuc"
                  />
                  <div className="textCnuc">Acesso Restrito</div>
                  <div className="card-header" />
                  <div className="alert alert-primary" role="alert">
                    <p>
                      Informe no campo abaixo seu CPF. Você receberá no e-mail cadastrado um link
                      para escolha de uma nova senha. <br />
                      Caso não tenha acesso ao e-mail,{' '}
                      <a href="/reset" className="alert-link">
                        clique aqui
                      </a>{' '}
                      para uma recuperação via SMS. <br />
                      Caso não tenha cadastro no CNUC,{' '}
                      <a href="/reset" className="alert-link">
                        clique aqui
                      </a>
                      ,preencha o formulário e cadastre-se.
                    </p>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    {errors.wrongUsername && (
                      <AlertModal show={showAlertModal} message="CPF incorreto" />
                    )}
                  </div>
                  <div className="container" style={{ textAlign: 'center', marginTop: '30px' }}>
                    <div className="row">
                      <div className="col-sm-2" />

                      <div className="col-sm-8">
                        <form onSubmit={this.onSubmit}>
                          {errors.username && (
                            <div className="text-danger" role="alert">
                              <small>{errors.username}</small>
                            </div>
                          )}

                          <div className="input-group form-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <MaterialIcon icon="account_circle" color="gray" size={25} />
                              </span>
                            </div>
                            <input
                              maxLength="14px"
                              type="text"
                              className="form-control"
                              placeholder="CPF"
                              autoComplete="off"
                              name="username"
                              value={username}
                              onChange={this.onChange}
                            />
                          </div>
                          <div style={{ marginTop: '30px' }}>
                            <div className="row">
                              <div className="col-sm-6">
                                <Link to="/login">
                                  <button
                                    type="button"
                                    className="btn btn-sucess btn-block"
                                    style={{
                                      backgroundColor: '#d1cebe',
                                      color: 'white',
                                      marginTop: '4px',
                                    }}
                                  >
                                    Voltar
                                  </button>
                                </Link>
                              </div>
                              <div className="col-sm-6">
                                <button
                                  type="submit"
                                  className="btn btn-secondary btn-block"
                                  style={{ backgroundColor: '#586b57', marginTop: '4px' }}
                                >
                                  Enviar
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="col-sm-2" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-3" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
