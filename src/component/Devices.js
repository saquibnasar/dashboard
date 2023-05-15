import React from 'react'
import SIdebar from "./SIdebar";
export default function Devices() {
  return (
   <div className="devices">
       <div className="d-flex">
      <SIdebar/>
      <div className="devices_content d-flex flex-direction-column">
   <h1>Devices</h1>
     <div className='devices_content_container'>
        <div className='devices_content_left'>
        <img src='/devices_content_left_img.png' alt='' className='img-fluid'/>
<h2>
Get Flax Card
</h2>
<p>
Don’t have Flax Card
<br/>
Purchase them here.
</p>
<button className="devices-primary">Get Card</button>
 
        </div>
        <div className='devices_content_border'></div>
        <div className='devices_content_right'>
       <img src='/devices_content_right_img.png' alt='' className='img-fluid'/>




<h2>
Activate Flax Card
</h2>
<p>
If you already have the Flax Card
<br/>
simply activate them here.
</p>
<button className="devices-primary">Activate Card</button>
 
        </div>
     </div>
      </div>
      </div>
   </div>
  )
}
