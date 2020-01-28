import React from 'react';
import { Parallax } from 'react-parallax';
import img from '../../pages/assets/img/img02.png';
import logoCnuc from '../../pages/assets/img/cnuc.png';
import './parallax.css';

export default function parralax() {
  return (
    <>
      <Parallax bgImage={img} strength={100}>
        <div style={{ height: 865 }}>
          <div className="container">
            <div className="row content-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <img className="imgParallax" src={logoCnuc} alt="logoMMA" />

                <div className="textParallax">
                  Sistema integrado de banco de dados com informações padronizadas das unidades de
                  conservação geridas pelos três níveis de governo e por particulares.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
}
