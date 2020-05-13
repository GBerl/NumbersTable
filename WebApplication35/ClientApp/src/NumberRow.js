import React from 'react'

class NumberRow extends React.Component {
 
    render() {
        const { number }=this.props
        return (
            <tr>
                <td>{number.int}</td>
                <td><button className='btn btn-primary' onClick={this.props.selectClick}>{number.btnName}</button></td>
            </tr>
            )
    }
}
export default NumberRow