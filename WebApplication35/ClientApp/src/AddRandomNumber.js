import React from 'react'

class AddRandomNumber extends React.Component {
    render() {
        return (
            <div>  
                    <button className='btn btn-primary btn-block' onClick={this.props.onAddClick}>Add Number</button>
            </div>
        )
    }

}
export default AddRandomNumber