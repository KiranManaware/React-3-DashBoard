import React from 'react'
import Button from './Button'

const Customer = () => {
  return (
    <div class="card">
          <span>
            <h1 class="display-1"><i class="fa-solid fa-users"></i></h1>
            <div>
              <h2 class="display-2">Total Customers</h2>
              <h1 class="display-1">10000</h1>
            </div>
          </span>
          <Button/>
        </div>
  )
}

export default Customer
