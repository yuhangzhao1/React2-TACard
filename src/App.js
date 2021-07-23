import React from 'react';
import './style.css';
import CardComponent from './CardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  /*  render() {
    return (
      <div className="row">
        <div className={'col-sm-3'}>
          <div className={'card border-default mx-1'}>
            <div className="card-body">
              <h6 className="TA-name">Andy Schoen</h6>
              <p className="TA-office-hours">Tue, 3-5 pm</p>
              <button className={'btn btn-success'}>{'Contact Andy'}</button>
            </div>
          </div>
        </div>

        <div className={'col-sm-3'}>
          <div className={'card border-default mx-1'}>
            <div className="card-body">
              <h6 className="TA-name">Andy Schoen</h6>
              <p className="TA-office-hours">Tue, 3-5 pm</p>
              <button className={'btn btn-success'}>{'Contact Andy'}</button>
            </div>
          </div>
        </div>

        <div className={'col-sm-3'}>
          <div className={'card border-default mx-1'}>
            <div className="card-body">
              <h6 className="TA-name">Andy Schoen</h6>
              <p className="TA-office-hours">Tue, 3-5 pm</p>
              <button className={'btn btn-success'}>{'Contact Andy'}</button>
            </div>
          </div>
        </div>

        <div className={'col-sm-3'}>
          <div className={'card border-default mx-1'}>
            <div className="card-body">
              <h6 className="TA-name">Andy Schoen</h6>
              <p className="TA-office-hours">Tue, 3-5 pm</p>
              <button className={'btn btn-success'}>{'Contact Andy'}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }*/
  render() {
    return (
      <div className="tile">
        <CardComponent
          TAName={'Amy Liu'}
          TAOfficeHours={'Mon, 3-5pm'}
          TAContactButtonText={'Contact Amy'}
        />
        <CardComponent
          TAName={'Bob Liu'}
          TAOfficeHours={'Mon, 3-5pm'}
          TAContactButtonText={'Contact Bob'}
        />
        <CardComponent
          TAName={'Yuhang Zhao'}
          TAOfficeHours={'Mon, 3-5pm'}
          TAContactButtonText={'Contact Yuhang Zhao'}
        />
        <CardComponent
          TAName={'Bob Liu'}
          TAOfficeHours={'Mon, 3-5pm'}
          TAContactButtonText={'Contact Bob'}
        />
      </div>
    );
  }
}

export default App;
