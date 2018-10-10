import React, { Component } from 'react';
import './Result.css';
import PropTypes from 'prop-types';

class Result extends Component {
  render() {
    const { resultInfo: data } = this.props;
    return (
      <div className="result-wrapper">
        <div className="card result">
          <div className="card-block">
            <div className="result-details">
              <h5 className="card-title">{ data.storeName }</h5>
              <p className="card-text">
                { data.address &&
                  <span>{data.address}<br/></span>
                }
                { data.postcode &&
                  <span>{ data.postcode }<br/></span>
                }
                { data.city &&
                  <span>{ data.city }<br/></span>
                }
              </p>
            </div>
            <a target="_blank" href={ data.mapUrl } id="routebeschrijving" className="card-link">Routebeschrijving</a>
          </div>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  resultInfo: PropTypes.object.isRequired
};

export default Result;
