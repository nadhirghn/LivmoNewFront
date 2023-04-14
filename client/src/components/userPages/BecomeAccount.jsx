import React from 'react'

import MetaData from '../shared/metaData'
import BecomeAccount from '../layout/BeomeAccount/becomeAccount'
import Layout from '../shared/layout'
const BecomeAccounts = () => {
  return (
  <React.Fragment>
    <Layout>
          <MetaData title={'livmo|Services & Experience Page'} />
    <BecomeAccount />
    </Layout>
         </React.Fragment>
  )
}

export default BecomeAccounts