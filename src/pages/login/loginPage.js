import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';
import { Modal } from 'react-bootstrap/';
import validateInput from './loginValidation';
import logoCnuc from '../assets/img/cnuc.png';
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
      password: '',
      errors: {},
      isLoading: false,
      showAlertModal: false,
      showSelectModal: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSelectClose = this.handleSelectClose.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.setState({ showAlertModal: false });
      this.setState({ showSelectModal: true });
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

  handleSelectClose() {
    // fechar modal
    this.setState({ showSelectModal: false });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      // when has errors
      this.setState({ errors });
      if (errors.wrongUsername || errors.wrongPassword || errors.wrongUserAndPassword) {
        this.setState({ showAlertModal: true });
      }
    }
    return isValid;
  }

  render() {
    const { errors, username, password, showAlertModal, showSelectModal } = this.state;

    return (
      <>
        <Modal
          show={showSelectModal}
          onHide={this.handleSelectClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Selecione o perfil de acesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container" style={{ textAlign: 'center' }}>
              <div className="form-check" id="exampleRadios1">
                <label htmlFor="exampleRadios1" id="exampleRadios1">
                  <input
                    className="customRadio1"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                </label>
              </div>
              <div className="form-check">
                <label htmlFor="exampleRadios2" id="exampleRadios2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  Second default radio
                </label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={this.handleSelectClose}
              type="button"
              className="btn btn-sucess"
              style={{
                backgroundColor: '#d1cebe',
                color: 'black',
                marginTop: '4px',
              }}
            >
              Fechar
            </button>
            <Link to="/painel" className="textMenu">
              <button
                type="submit"
                className="btn btn-secondary "
                style={{ backgroundColor: '#586b57' }}
              >
                Entrar
              </button>
            </Link>
          </Modal.Footer>
        </Modal>

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
                </div>
                <div className="card-header" />
                <div>
                  {errors.wrongUsername && (
                    <AlertModal show={showAlertModal} message="CPF incorreto" />
                  )}
                  {errors.wrongPassword && (
                    <AlertModal show={showAlertModal} message="Senha incorreta" />
                  )}{' '}
                  {errors.wrongUserAndPassword && (
                    <AlertModal show={showAlertModal} message="CPF e senha incorretos" />
                  )}{' '}
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
                            maxLength="14"
                            type="text"
                            className="form-control"
                            placeholder="CPF"
                            autoComplete="off"
                            name="username"
                            value={username}
                            onChange={this.onChange}
                          />
                        </div>

                        {errors.password && (
                          <div className="text-danger" role="alert">
                            <small>{errors.password}</small>
                          </div>
                        )}

                        <div className="input-group form-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <MaterialIcon icon="https" color="gray" size={25} />
                            </span>
                          </div>
                          <input
                            maxLength="15"
                            type="password"
                            className="form-control"
                            placeholder="Senha"
                            autoComplete="off"
                            name="password"
                            value={password}
                            onChange={this.onChange}
                          />
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <Link to="/login/resetar" className="textMenu">
                            Esqueceu a senha?
                          </Link>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                          <div className="row">
                            <div className="col-sm-6">
                              <Link to="/novo_cadastro">
                                <button
                                  type="button"
                                  className="btn btn-sucess btn-block"
                                  style={{
                                    backgroundColor: '#edbc63',
                                    color: 'white',
                                    marginTop: '4px',
                                  }}
                                >
                                  Solicitar Acesso
                                </button>
                              </Link>
                            </div>
                            <div className="col-sm-6">
                              <button
                                type="submit"
                                className="btn btn-secondary btn-block"
                                style={{ backgroundColor: '#586b57', marginTop: '4px' }}
                              >
                                Entrar
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
              <div className="col-sm" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
