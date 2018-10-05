import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  render() {
    const { resultInfo: data } = this.props;
    return (
      <div className="result-wrapper">
        <div className="card result">
          <div className="card-block">
            <div className="result-details">
              <h5 className="card-title">{ data.storeName }</h5>
              <h6 className="card-subtitle mb-3 text-muted store-type">{ data._typeFormatted }</h6>
              <p className="card-text">
                { data.address1 }<br/>
                { data.address2 &&
                  <span>{data.address2}<br/></span>
                }
                { data.city &&
                  <span>{ data.city }<br/></span>
                }
                { data.postcode &&
                  <span>{ data.postcode }<br/></span>
                }
                { data.telephone }
              </p>
            </div>
            <a target="blank" href={ data.mapUrl } className="card-link">Directions</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;