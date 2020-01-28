import React, { Component } from 'react';
import { Figure, Button, Row, Col, Alert } from 'react-bootstrap/';
import MaterialIcon from 'material-icons-react';
import logoCnuc from '../assets/img/cnuc.png';
import validatePassword from './passwordValidation';

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
      password1: '',
      password2: '',
      errors: {},
      isLoading: false,
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

  handleSucessClose() {
    // fechar modal
    this.setState({ showSucessModal: false });
  }

  isValid() {
    const { errors, isValid } = validatePassword(this.state);

    if (!isValid) {
      // when has errors
      this.setState({ errors });
      if (errors.wrongUsername) {
        this.handleAlertShow(); // abre modal se nome, senha ou ambos estiverem incorretos
      }
    }
    return isValid;
  }

  render() {
    const { password1, password2, showSucessModal, errors } = this.state;

    return (
      <>
        <div className="loginBody">
          <div className="container">
            <Row>
              <Col xl={3}> </Col>
              <Col xl={6}>
                <div className="container-fluid" style={{ textAlign: 'center' }}>
                  <Figure>
                    <Figure.Image className="logoCnuc" src={logoCnuc} />
                    <Figure.Caption className="textCnuc">Acesso Restrito</Figure.Caption>
                  </Figure>
                </div>

                <div className="card-header" />

                <Alert
                  variant="success"
                  show={showSucessModal}
                  onClose={this.handleSucessClose}
                  dismissible
                  style={{ marginTop: '20px' }}
                >
                  <p id="error " style={{ margin: 'unset' }}>
                    Senha atualizada
                  </p>
                </Alert>

                <div className="container" style={{ textAlign: 'center', marginTop: '30px' }}>
                  <Row>
                    <Col />
                    <Col xl={8}>
                      <form onSubmit={this.onSubmit}>
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
                            placeholder="Nova senha"
                            autoComplete="off"
                            name="password1"
                            value={password1}
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
                            placeholder="Repetir senha"
                            autoComplete="off"
                            name="password2"
                            value={password2}
                            onChange={this.onChange}
                          />
                        </div>

                        <div style={{ marginTop: '30px' }}>
                          <Button
                            variant="secondary"
                            type="submit"
                            block
                            style={{ backgroundColor: '#586b57' }}
                          >
                            Enviar
                          </Button>
                        </div>
                      </form>
                    </Col>
                    <Col />
                  </Row>
                </div>
              </Col>
              <Col xl={3} />
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
