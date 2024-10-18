import React from 'react'
import Button from './components/Button'

const Orders = () => {
  return (
    <div class="card">
          <span>
            <h1 class="display-1"><i class="fa-solid fa-boxes-stacked"></i></h1>
            <div>
              <h2 class="display-2">Total Orders</h2>
              <h1 class="display-1">500</h1>
            </div>
          </span>
          <Button/>
        </div>
  )
}

export default Orders
