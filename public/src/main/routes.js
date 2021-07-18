import React from 'react'
import { Router, Router, Redirect, hashHistory } from 'react-router'
import Dashboard from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => {
    <Router history={hashHistory}>
        <Router path="/" component={Dashboard}/>
        <Router path="/billingCycles" component={BillingCycle}/>
        <Redirect from="*" to="/" />
    </Router>
}
