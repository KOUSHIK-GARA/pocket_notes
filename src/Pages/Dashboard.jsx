import React from 'react'
import Sidenav from './Sidenav'
import MessageBox from './MessageBox'

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid d-flex" >
          <div className="flex-grow-0" style={{width:"25%"}}>
            <Sidenav/>
          </div>
          <div className="flex-grow-1" style={{background:"#DAE5F5"}}>
            <MessageBox/>
          </div>
      </div>
    </>
  )
}

export default Dashboard
