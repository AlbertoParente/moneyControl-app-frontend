import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        return List.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(bc)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(bc)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
            <tr key={bc._id}>
            <td>{bc.name}</td>
            <td>{bc.month}</td>
            <td>{bc.year}</td>
            <td>
                <button className="btn btn-warning" onClick={() => this.props.showUpdate(bc)}>
                    <i className="fa fa-pencil"></i>
                </button>
                <button className="btn btn-danger" onClick={() => this.props.showDelete(bc)}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </td>
        </tr>
        ))
    }

    reder() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Month</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
            <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Month</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        </div>
        )
    }
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default BillingCycleList
