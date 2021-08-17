import React, { component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import summary from './summary'

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className={box - body}>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label="Name" cols="12 4" placeholder="Enter The Name" />
                    <Field name='month' component={LabelAndInput} type="number" readOnly={readOnly}
                        label="Month" cols="12 4" placeholder="Enter The Month" />
                    <Field name='year' component={LabelAndInput} type="number" readOnly={readOnly}
                        label="Age" cols="12 4" placeholder="Enter The Age" />
                    <Summary credit={1000} debt={100} />
                    <ItemList cols="12 6" list={credits} readOnly={readOnly}
                        field="credits" legend="Credits" />
                    <ItemList cols="12 6" list={debts} readOnly={readOnly}
                        field="debts" legend="Debts" showStatus={true} />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({ credits: selector(state, 'credits'), debts: selector(state, 'debts') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
