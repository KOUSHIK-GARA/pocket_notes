import React from 'react'
import banner from "../assets/Banner.png";
import lock from "../assets/lock.png";
const MessageBox = () => {
  return (
    <>
      <div className="container p-3 text-center" style={{height:"100vh"}}>
        <div className="mb-4 d-flex flex-column justify-content-center align-items-center">
          <img src={banner} alt="banner" />
          <h2>Pocket Notes</h2>
          <p> Send and receive messages without keeping your phone online.</p>
          <p>Use Pocket Notes on up to 4 linked devices and 1
            mobile phone</p>
        </div>
        <footer>
          <img src={lock} alt="lock"></img> &nbsp; end-to-end encrypted
        </footer>
      </div>
    </>
  )
}

export default MessageBox
