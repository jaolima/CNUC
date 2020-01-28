import React, { Component } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import logoCnuc from '../assets/img/cnuc.png';
import './register.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({ profile: value });
  }

  render() {
    const { profile } = this.state;

    let forms = null;

    if (profile === 'GUC' || profile === 'CD') {
      forms = (
        <div>
          <div className="pTwo">
            <span className="spanOne">Cadastro para gestor de UC ou consultor de dados</span>
          </div>
          <div className="container">
            <form>
              <div className="form-row">
                <div className="form-group col-md">
                  <label htmlFor="nome" id="nome">
                    <span className="asterisk">*</span>Nome
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Nome"
                    required
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="CPF" id="CPF">
                    <span className="asterisk">*</span>CPF
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="CPF"
                    placeholder="CPF"
                    required
                    maxLength="11"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="rg" id="rg">
                    <span className="asterisk">*</span>RG
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="rg"
                    placeholder="rg"
                    required
                    maxLength="7"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="orgaoEmissor" id="orgaoEmissor">
                    <span className="asterisk">*</span>Órgão emissor
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="orgaoEmissor"
                    placeholder="Orgão Emissor"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label htmlFor="Matirucla" id="Matirucla">
                    <span className="asterisk">*</span>Matrícula SIAPE ou Equivalente
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Matirucla"
                    placeholder="Matrícula SIAPE ou Equivalente"
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="orgaoGestor" id="orgaoGestor">
                    <span className="asterisk">*</span>Órgão gestor
                  </label>
                  <select className="form-control" id="Órgão gestor">
                    <option selected>Órgão Gestor</option>
                    <option>2</option>
                  </select>
                </div>
                <div className="form-group col-md">
                  <label htmlFor="setorTrabalho" id="setorTrabalho">
                    <span className="asterisk">*</span>Setor de Trabalho
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="setorTrabalho"
                    placeholder="text"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md">
                  <label htmlFor="email" id="email">
                    <span className="asterisk">*</span>Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group col-md-1">
                  <label htmlFor="DDD" id="DDD">
                    <span className="asterisk">*</span>DDD
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputtext4"
                    placeholder="DDD"
                    maxLength="2"
                    required
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="telefone" id="telefone">
                    <span className="asterisk">*</span>Telefone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputtext4"
                    placeholder="telefone"
                    required
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="cargo" id="cargo">
                    <span className="asterisk">*</span>Cargo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cargo"
                    placeholder="text"
                    required
                  />
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  style={{ backgroundColor: '#136235', marginBottom: '20px', marginTop: '10px' }}
                >
                  Enviar para aprovação
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    } else if (profile === 'OG') {
      forms = (
        <div>
          <div className="pTwo">
            <span className="spanOne">Cadastro para orgão gestor</span>
          </div>
          <div className="container">
            <form>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label htmlFor="CNPJ" id="CNPJ">
                    <span className="asterisk">*</span>CNPJ
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="CNPJ"
                    placeholder="CNPJ"
                    required
                    maxLength="11"
                  />
                </div>

                <div className="form-group col-md">
                  <label htmlFor="text" id="nome">
                    <span className="asterisk">*</span>Nome do Orgão Gestor
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Nome"
                    required
                  />
                </div>

                <div className="form-group col-md-2">
                  <label htmlFor="Sigla" id="Sigla">
                    <span className="asterisk">*</span>Sigla
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Sigla"
                    placeholder="Sigla"
                    required
                    maxLength="7"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label htmlFor="EsferaAdm" id="EsferaAdm">
                    <span className="asterisk">*</span>Esfera administrativa
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="EsferaAdm"
                    placeholder="Esfera administrativa"
                    required
                  />
                </div>

                <div className="form-group col-md">
                  <label htmlFor="email" id="email">
                    <span className="asterisk">*</span>Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group col-md-1">
                  <label htmlFor="DDD" id="DDD">
                    <span className="asterisk">*</span>DDD
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputtext4"
                    placeholder="DDD"
                    maxLength="2"
                    required
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="telefone" id="telefone">
                    <span className="asterisk">*</span>Telefone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputtext4"
                    placeholder="telefone"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label htmlFor="CEP" id="CEP">
                    CEP
                  </label>
                  <input type="number" className="form-control" id="CEP" placeholder="CEP" />
                </div>
                <div className="form-group col-md-1">
                  <label htmlFor="UF" id="UF">
                    UF
                  </label>
                  <input type="text" className="form-control" id="UF" placeholder="UF" />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="Município" id="Município">
                    Município
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Município"
                    placeholder="Município"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="Endereço" id="Endereço">
                    Endereço
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Endereço"
                    placeholder="Endereço"
                  />
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  style={{ backgroundColor: '#136235', marginBottom: '20px', marginTop: '10px' }}
                >
                  Enviar para aprovação
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    } else if (profile === 'VMMA') {
    }

    return (
      <>
        <div className="content">
          <div className="container-fluid">
            <div>
              <Header />
            </div>
            <div>
              <div style={{ textAlign: 'center' }}>
                <img className="logoCnuc" src={logoCnuc} alt="logoCnuc" />
              </div>
              <div className="pTwo">
                <span className="spanOne">Instruções para cadastramento</span>
              </div>
              <div className="pOne">
                <div className="row ">
                  <div className="col-sm-8 " style={{ textAlign: 'center' }}>
                    <p className="hOne" style={{ fontWeight: 'bold' }}>
                      Cadastro de Órgão Gestor e Unidades de Conservação
                    </p>
                    <p className="hOne">
                      Inscrição de órgão gestor e de unidades de conservação no Cadastro Nacional de
                      Unidades de Conservação - CNUC
                    </p>
                    <p className="hOne" style={{ paddingBottom: '20px' }}>
                      Os procedimentos listados abaixo estão normatizados na Portaria 380, de 27 de
                      dezembro de 2005, publicado no DOU de 28/12/2005
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <div className="dropdown" style={{ margin: '30px 0px 30px 0px' }}>
                      <p className="hOne" style={{ fontWeight: 'bold' }}>
                        Selecione o tipo de perfil que deseja ter para acessar o CNUC
                      </p>
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{ backgroundColor: '#136235' }}
                      >
                        Selecione o perfil
                      </button>
                      <div className="dropdown-menu">
                        <button
                          className="dropdown-item"
                          value="OG"
                          type="button"
                          onClick={e => this.handleClick(e.target.value)}
                        >
                          Órgão Gestor
                        </button>
                        <button
                          className="dropdown-item"
                          value="GUC"
                          type="button"
                          onClick={e => this.handleClick(e.target.value)}
                        >
                          Gestor de UC
                        </button>
                        <button
                          className="dropdown-item"
                          value="VMMA"
                          type="button"
                          onClick={e => this.handleClick(e.target.value)}
                        >
                          Validador MMA
                        </button>
                        <button
                          className="dropdown-item"
                          value="CD"
                          type="button"
                          onClick={e => this.handleClick(e.target.value)}
                        >
                          Consultor de dados
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>{forms}</div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Register;
