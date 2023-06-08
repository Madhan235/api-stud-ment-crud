import React from 'react'
import Base from '../Base/Base'

function Nopage() {
  return (
    <Base
    title={"You are in the worng Page !!"}
    description={"Please click the above buttons to Navigate"}>
    <div> 
<img   className='responsive' src="no-page.jpeg" alt='sad-dog'/>
    </div>
    </Base>

  )
}

export default Nopage