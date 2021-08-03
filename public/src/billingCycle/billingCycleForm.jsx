import React, { component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit } = this.props

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className={box-body}>
                    <Field name='name' component={labelAndInput}
                        label="Name" cols="12 4" placeholder="Enter The Name" />
                    <Field name='month' component={labelAndInput} type="number"
                        label="Month" cols="12 4" placeholder="Enter The Month" />
                    <Field name='year' component={labelAndInput} type="number"
                        label="Age" cols="12 4" placeholder="Enter The Age" />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)
