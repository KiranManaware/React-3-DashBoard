import React from 'react'
import Button from './Button'

const Delivery = () => {
  return (
    <div class="card">
          <span>
            <h1 class="display-1">
              <i class="fa-solid fa-truck-ramp-box"></i>
            </h1>
            <div>
              <h2 class="display-2">Total Deliveries</h2>
              <h1 class="display-1">6512</h1>
            </div>
          </span>
          <Button/>
        </div>
  )
}

export default Delivery
