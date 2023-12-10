import React from 'react'
import Layout from '../../Components/Layout'
import UserMenu from '../../Components/Layouts/UserMenu'
const UserOrder = () => {
  return (
    <Layout title={"user-Orders | E-bazar"}>
        <div className='container'>
        <div className="row">
          <h2 className="div-heading">User Dashboard</h2>
        </div>
            <div className='row p-3'>
                <div className='col-md-3'>
                    <UserMenu/>
                </div>
                <div className='col-md-9'>User Orders</div>
            </div>
        </div>
    </Layout>
  )
}

export default UserOrder