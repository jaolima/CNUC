import React from 'react';
import './whatIsCnuc.css';
import MaterialIcon from 'material-icons-react';

export default function whatIsCnuc() {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-5">
          <div className="row">
            <div className="col-xl-2 col-sm-2 col-md-2 col-lg-2">
              <MaterialIcon icon="description" color="#4b504e" size={70} />
            </div>
            <div className="col-10">
              <span className="bottomGreenBorder-text">O que é o cadastro</span>
              <p>
                O Cadastro Nacional de Unidades de Conservação (CNUC) é mantido pelo MMA com a
                colaboração dos Órgãos gestores federal, estaduais e municipais. Seu principal
                objetivo é disponibilizar um banco de dados com informações oficiais do Sistema
                Nacional de Unidades de Conservação.
              </p>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="row">
            <div className="col-sm-2">
              <MaterialIcon icon="list_alt" color="#4b504e" size={70} />
            </div>
            <div className="col-10">
              <span className="bottomGreenBorder-text">Vantagens</span>
              <p>
                Neste ambiente são apresentadas as características físicas, biológicas, turísticas,
                gerenciais e os dados georreferenciados das unidades de conservação. Assim, a
                sociedade poderá acompanhar os resultados das ações governamentais de proteção do
                patrimônio biológico nacional
              </p>
            </div>
          </div>
        </div>
        <div className="w-100" />
        <div className="col-5">
          <div className="row">
            <div className="col-sm-2">
              <MaterialIcon icon="comment" color="#4b504e" size={70} />
            </div>
            <div className="col-10">
              <span className="bottomGreenBorder-text">Como funciona</span>
              <p>
                Neste ambiente são apresentadas as características físicas, biológicas, turísticas,
                gerenciais e os dados georreferenciados das unidades de conservação. Assim, a
                sociedade poderá acompanhar os resultados das ações governamentais de proteção do
                patrimônio biológico nacional
              </p>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="row">
            <div className="col-sm-2">
              <MaterialIcon icon="insert_chart" color="#4b504e" size={70} />
            </div>
            <div className="col-10">
              <span className="bottomGreenBorder-text">Resultados</span>
              <p>
                Neste ambiente são apresentadas as características físicas, biológicas, turísticas,
                gerenciais e os dados georreferenciados das unidades de conservação. Assim, a
                sociedade poderá acompanhar os resultados das ações governamentais de proteção do
                patrimônio biológico nacional
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
