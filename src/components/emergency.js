import React, {Component} from 'react';

class Emergency extends Component {
  render() {
    return (
      <div className="container-fluid" style={{padding: '1em'}}>
        <div className="row">
          <div className="col-4">
            <h2>Camp name</h2>
            <ul class="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <b>Phone:</b> +49 000 0000000
                <span className="badge badge-primary fa fa-phone badge-pill" />
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <b>Email:</b> refugee.camp@email.de
                <span className="badge badge-primary fa fa-mail" />
              </li>
            </ul>
          </div>
          <div className="col-8">
            <h2>Situation</h2>
            <div className="alert alert-danger" role="alert">Running low on children food!</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Emergency;
