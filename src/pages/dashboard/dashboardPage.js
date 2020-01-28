import React, { Component } from 'react';
import './dashboardPage.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

// eslint-disable-next-line react/prefer-stateless-function
class DashboardPage extends Component {
  render() {
    const logado = true;
    return (
      <>
        <Header logado={logado} />
        <div style={{ height: 850 }} />
        <Footer logado={logado} />
      </>
    );
  }
}

export default DashboardPage;
