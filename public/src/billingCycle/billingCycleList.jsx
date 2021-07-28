import React, { component } from 'react'

class BillingCycleList extends Component {

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
                </table>
            </div>
        )
    }
}

export default BillingCycleList
