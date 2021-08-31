import React from 'react'
import { Router, Router, IndexRoute, Redirect, hashHistory } from 'react-router'
import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => {
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Router path="billingCycles" component={BillingCycle} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
}
