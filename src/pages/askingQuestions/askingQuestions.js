import React, { Component } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <div>
          <div className="conteiner-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-12 w-100">
                <div className="pTwo">
                  <span className="spanOne">Perguntas Frequentes</span>
                </div>
                <div className="pOne">
                  <div className="col-xl-12 text-center">
                    <div style={{ height: 35 }} />
                    <p>
                      O <b>Cadastro Nacional de Unidades de Conservação (CNUC)</b> é mantido pelo
                      MMA com a colaboração dos Órgãos gestores federais, estaduais e municipais.
                      Seu principal objetivo é disponibilizar um banco de dados com informações
                      oficiais do Sistema Nacional de Unidades de Conservação. Neste ambiente são
                      apresentadas as características físicas, biológicas, turísticas, gerenciais e
                      os dados georreferenciados das unidades de conservação. Assim, a sociedade
                      poderá acompanhar os resultados das ações governamentais de proteção do
                      patrimônio biológico nacional, conforme estabelecido no artigo 50 da Lei nº
                      9.985/2000, que instituiu o Sistema Nacional de Unidades de Conservação da
                      Natureza - SNUC.
                    </p>
                    <p>
                      <div className="col-sm-12 text-center">
                        <p>
                          <p>
                            <b>Confira perguntas e respostas relacionadas ao CNUC</b>
                          </p>
                        </p>
                      </div>
                    </p>

                    <div className="card col-sm-8">
                      <div id="accordion">
                        <div className="card col-sm-12">
                          <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                              <button
                                type="button"
                                className="btn btn-link"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                1 - Quem é o responsável pelo cadastramento e a atualização dos
                                dados no CNUC?
                              </button>
                            </h5>
                          </div>

                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              O responsável é o órgão gestor responsável pela gestão da unidade de
                              conservação.
                            </div>
                          </div>
                        </div>
                        <div className="card col-sm-12">
                          <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                              <button
                                type="button"
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                2 - Por que nem todas as UC têm a informação da poligonal do limite
                                da UC disponível?
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              Porque nem sempre os Órgãos Gestores cadastram a informação
                              geoferrenciada com uma qualidade onde é possível localizar com clareza
                              a unidade de conservação.
                            </div>
                          </div>
                        </div>
                        <div className="card col-sm-12">
                          <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                              <button
                                type="button"
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                3 - Quais são os objetivos do CNUC?
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                <li>
                                  Avaliar a conformidade da Unidade de Conservação com o disposto na
                                  lei do SNUC.
                                </li>
                              </p>
                              <p>
                                <li>
                                  Disponibilizar informações oficiais sobre as Unidades de
                                  Conservação para a sociedade.
                                </li>
                              </p>
                              <p>
                                <li>
                                  Disponibilizar ferramentas de gestão e geoprocessamento para os
                                  gestores das unidades de conservação cadastradas.
                                </li>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="card col-sm-12">
                          <div className="card-header" id="heading4">
                            <h5 className="mb-0">
                              <button
                                type="button"
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapse4"
                                aria-expanded="false"
                                aria-controls="collapse4"
                              >
                                4 - Quais são os princípios de funcionamento do CNUC?
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse4"
                            className="collapse"
                            aria-labelledby="heading4"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                <li>
                                  O Ministério do Meio Ambiente é o responsável pelo desenvolvimento
                                  e manutenção do CNUC, a análise dos dados básicos para verificar
                                  se a unidade de conservação está em acordo com o SNUC e a
                                  divulgação das informações cadastradas.
                                </li>
                              </p>
                              <p>
                                <li>
                                  {' '}
                                  Os órgãos gestores são responsáveis pelo cadastramento e a
                                  qualidade dos dados das unidades de conservação e têm autonomia no
                                  gerenciamento de seus usuários.
                                </li>
                              </p>
                            </div>
                          </div>
                          <div style={{ height: 220 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Questions;
