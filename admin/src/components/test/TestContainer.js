import * as React from 'react';
import * as request from 'superagent'
import { connect } from 'react-redux'
import {CLOUDINARY_UPLOAD_PRESET} from '../../cdnConstant'
import {CLOUDINARY_UPLOAD_URL} from '../../cdnConstant'
import {dispatchUrl} from '../../actions/images'

class TestContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
  }
  
  fileSelectedHandler = event => {
    this.setState({
      uploadedFile: event.target.files[0]
    })

    this.fileUploadHandler(event.target.files[0])
  }

  fileUploadHandler(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                      .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectedHandler}/>
        
        {this.state.uploadedFileCloudinaryUrl === '' ? null :
        <div>
          <p>{this.state.uploadedFile.name}</p>
          <img src={this.state.uploadedFileCloudinaryUrl} />
          {this.props.dispatchUrl(this.state.uploadedFileCloudinaryUrl)}
        </div>}
        
      </div>
    )
  }
}

export default connect(null, {dispatchUrl})(TestContainer)