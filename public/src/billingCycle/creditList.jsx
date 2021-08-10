import React, { Component } from 'react'
import { Field } from 'redux-form'
import Grid from '../common/layout/grid'

class CreditList extends Component {
    renderRows() {
        return (
            <tr>
                <td><Field name="???" component="input"></Field></td>
                <td><Field name="???" component="input"></Field></td>
                <td></td>
            </tr>
        )
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Credits</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList
