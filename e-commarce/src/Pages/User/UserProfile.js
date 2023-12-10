import React from 'react'
import Layout from '../../Components/Layout'
import UserMenu from '../../Components/Layouts/UserMenu'
import { useAuth } from '../../context/auth'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  const [auth]=useAuth()
  return (
    <Layout title={"user-profile | E-bazar"}>
        <div className='container'>
        <div className="row">
          <h2 className="div-heading">User Dashboard</h2>
        </div>
            <div className='row p-3'>
                <div className='col-md-3'>
                    <UserMenu/>
                </div>
                <div className='col-md-9 d-flex flex-column'>
                  <h3 className='div-sub-heading'>User Profile</h3>
                  <div className='card p-4'>
                    <p>Name: {auth?.user?.name}</p>
                    <p>Email: {auth?.user?.username}</p>
                    <p>Phone: {auth?.user?.phone}</p>
                    <p>Address: {auth?.user?.Address}</p>
                    <Link className='btn btn-primary w-25'> change password</Link>
                  </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default UserProfile