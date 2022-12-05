import React from 'react'
import Feed from '../../components/Admin/Feed/Feed'
import Navbar from '../../components/Admin/Navbar/Navbar'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'

function AdminHome() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Feed/>
    </div>
  )
}

export default AdminHome