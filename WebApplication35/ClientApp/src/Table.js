import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import AddRandomNumber from './AddRandomNumber'
import NumberRow from './NumberRow'

class Table extends React.Component {
    state = {
        numbers: [],
        ulList: [],
        number: {
            int: '',
            btnName: ''
        }

    }
    onAddClick = () => {
        const number = {
            int: Math.floor(Math.random() * 10000) + 1,
            btnName: 'Add'
        }
        const numbers = [...this.state.numbers, number]
        this.setState({ numbers })
    }
    selectClick = n => {
        let ulList = []
        if (n.btnName === 'Add') {
            ulList = [...this.state.ulList, n]
            n.btnName = 'Remove'
        }
        else {
            ulList = this.state.ulList.filter(number => number !== n);
            n.btnName = 'Add'
        }
        this.setState({ ulList })


    }
    render() {
        return (
            <div className='container' style={{ marginTop: 55 }}>
                <div className='col-md-8'>
                    <AddRandomNumber onAddClick={this.onAddClick} />
                    <table className="table table-bordered table-striped table-hover" style={{ marginTop: 15 }}>
                        <thead>
                            <tr>
                                <th>Random Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.numbers.map((number, i) => <NumberRow key={i} number={number} selectClick={() => this.selectClick(number)} />)}
                        </tbody>
                    </table>
                </div>
                
                    {!!this.state.ulList.length && <div className='col-md-4'>
                        <h3>Selected Numbers</h3>
                        <ul>
                            {this.state.ulList.map((number, i) => <li key={i} >{number.int}</li>)}
                        </ul>
                   </div> }
                
            </div>
        )
    }
}
export default Table