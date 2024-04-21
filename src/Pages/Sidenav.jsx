import React from 'react'
import Card from 'react-bootstrap/Card';

const Sidenav = () => {

  const iconStyle = {
    marginRight : "1%"
  }

  return (
   <>
       <div className="container">
          <h2 className="mt-3 text-center">Pocket Notes</h2>
          <Card className='mt-3 d-flex flex-row' style={{ height: '4rem' , width:'20rem' }}>
            <div className={iconStyle}>KG</div>
            <div className="ml-3"> KOUSHIK GARA</div>
          </Card>
        </div>
   </>
  )
}

export default Sidenav
