import * as React from 'react'
import Slotmachine from './Slotmachine'

export default class SlotmachineContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterSauce: false,
            filterNoSauce: false
        }
        this.setFilterSauce = this.setFilterSauce.bind(this)
        this.setFilterNoSauce = this.setFilterNoSauce.bind(this)
    }

    setFilterSauce = () => {
        return this.setState(prevState => ({
            filterSauce: !prevState.filterSauce
        }))
    }

    setFilterNoSauce = () => {
        return this.setState(prevState => ({
            filterNoSauce: !prevState.filterNoSauce
        }))
    }

    render() {
        return (
            <div>
                <Slotmachine state={this.state} setFilterSauce={this.setFilterSauce} setFilterNoSauce={this.setFilterNoSauce}/>
            </div>
        )
    }
}