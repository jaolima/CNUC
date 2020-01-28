import React, { Component } from 'react';

class AlertModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { show, message } = this.props;
    if (show) {
      return (
        <>
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Erro!</h4>
            {message}
          </div>
        </>
      );
    }
    return null;
  }
}

export default AlertModal;
