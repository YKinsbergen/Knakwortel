import {CDN_UPLOAD_URL} from '../cdnConstant'
import request from 'superagent'

// Image upload handlers
export const uploadPresetPrompt = () => {
  if (process.env.REACT_APP_CDN_CODE) {
    return process.env.REACT_APP_CDN_CODE
  } else {
    let form = prompt("Please enter your preset")
    if (form !== null) {
      return form
    }
  }
}

export const fileSelectHandler = async(event) => {
  this.fileUploadHandler(event.target.files[0], await this.uploadPresetPrompt())
}

export const fileUploadHandler = (file, uploadPreset) => {
  let upload = request.post(CDN_UPLOAD_URL)
                    .field('upload_preset', uploadPreset)
                    .field('file', file);
  upload.end((err, response) => {
    if (err) {
      console.error(err);
    }
    if (response.body.secure_url !== '') {
      this.setState({
        uploadedFileCloudinaryUrl: response.body.secure_url
      })
      this.props.updateBlockImage(
        Number(this.props.match.params.id), 
        this.state.uploadedFileCloudinaryUrl)
    }
  })
}