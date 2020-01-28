import React from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';
import WhatIsCnuC from '../../components/whatIsCnuc/whatIsCnuc';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Paralllax from '../../components/parallax/parallax';
import './index.css';
import Imagem4 from '../assets/img/04.jpg';

export default function Main() {
  const logado = false;
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {' '}
          <Header logado={logado} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {' '}
          <Paralllax />
        </div>
      </div>
      <div className="whatsIsCnuc">
        <div style={{ textAlign: 'center' }}>
          <span className="bottomBlueBorder-text">Entenda o que é o CNUC</span>
        </div>
        <WhatIsCnuC />
      </div>
      <div style={{ height: 30 }} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 w-100">
            <Link to="/login">
              <div className="cards">
                <div
                  className="card text-white bg-success"
                  style={{ width: '18rem', height: '11rem' }}
                >
                  <div className="card-body text-center">
                    <MaterialIcon icon="library_add" color="white" size={66} />
                    <p className="card-text">
                      Requerimento para Cadastro de Unidade de Conservação
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/duvidas_frequentes">
              <div className="cards">
                <div
                  className="card text-white bg-success"
                  style={{ width: '18rem', height: '11rem' }}
                >
                  <div className="card-body text-center">
                    <MaterialIcon icon="report" color="white" size={66} />
                    <p className="card-text">Dúvidas frequentes sobre Unidade de Conservação</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/powerbi">
              <div className="cards">
                <div
                  className="card text-white bg-dark"
                  style={{ width: '18rem', height: '11rem' }}
                >
                  <div className="card-body text-center">
                    <MaterialIcon icon="search" color="gray" size={66} />
                    <p className="card-text">Consulta Pública de dados Consolidados do CNUC</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ height: 100 }} />
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters text-center">
            <div
              className="col-lg-12 order-lg-1 text-white showcase-img"
              style={{ backgroundImage: `url(${Imagem4})` }}
            >
              <h3 style={{ paddingTop: '4%' }}>
                Informações de Unidades de conservação <p> Mapas</p>
              </h3>
              <div className="row d-flex justify-content-center">
                <div className="col-sm-2 " style={{ paddingTop: '2%' }}>
                  <MaterialIcon icon="insert_chart" color="white" size={100} />
                  <p className="lead mb-0">Número de unidades cadastradas:</p>
                  <p> 687</p>
                </div>

                <div className="col-sm-2" style={{ paddingTop: '2%' }}>
                  <MaterialIcon icon="map" color="white" size={100} />
                  <p className="lead mb-0">Área total:</p>
                  <p>687</p>
                </div>
              </div>
              <div style={{ paddingTop: '2%', paddingBotton: '2%' }}>
                {' '}
                <Link to="/mapa">
                  <button type="button" className="btn btn-dark">
                    ACESSE A PLATAFORMA
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
