import React from 'react'
import Info from './Info'
import Portfolio from './Portfolio'

function Home() {
  return (
    <div className='item-main'>
		  <Info/>
      <hr/>
		  <Portfolio/>
    </div>
  )
}

export default Home