import * as React from 'react'
import {connect} from 'react-redux'
import Shops from './Shops'
import {addShops, getShops, deleteShop} from '../actions/shops'

class ShopsContainer extends React.PureComponent {
  state = {
    newShops: null
  }

  handleFileResult = (result) => {
    this.setState({
      ...this.state,
      newShops: result
    })
    // console.log(result)
    this.props.addShops(result) // works but turned off for now
  }

  handleFiles = (input) => {

    const file = input.target.files[0];
    const reader = new FileReader();  

    reader.onload = (event) => {
        const file = event.target.result
        const allLines = file.split(/\r\n|\n/)
        const lineArray = []
        // Reading line by line
        allLines.forEach( (line) => {
          const lineValues = line.match(/([^,]+);([^,]+);([^,]+);([^,]+);(.*);([^,]+);([^,]+)/)
          const lineObj = {
            storeName: lineValues[1],
            address: lineValues[2],
            postcode: lineValues[3],
            city: lineValues[4],
            mapUrl: lineValues[5],
            latitude: lineValues[6],
            longitude: lineValues[7]
          }
            lineArray.push(lineObj)
        })
        this.handleFileResult(lineArray)
    };

    reader.onerror = (event) => {
        alert(event.target.error.name);
    };

    reader.readAsText(file)
  }

  handleShopDelete = (event) => {
    let answer = window.confirm("Are you sure you want to delete this shop?")
    if (answer) {
      return this.props.deleteShop(Number(event))
    } 
    else {
      return ;
    }
  }

  componentDidMount() {
    this.props.getShops()
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.shops )
  // }

  render() {
    if (!this.props.shops) return 'loading'
    return (
      <Shops shops={this.props.shops} addShopsOnChange={this.handleFiles} handleShopDelete={this.handleShopDelete}/>

      // <input type="file" name="shopsCsv" id="shopsCsv" onChange={this.handleFiles}/>
    )
  }
}

const mapStateToProps = (state) => ({
  shops: state.shops
})

const mapDispatchToProps = {
  addShops,
  getShops,
  deleteShop
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopsContainer)