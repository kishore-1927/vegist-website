import React from 'react'
import './Shop.css'

export default function Shop() {
  return (
    <div>
        <div className='first-line mt-3'>
            <a className=''  href="">Home / Bestseller</a>
        </div>
        <div className='navbar navbar-nav w-25 left-nav'>
            <h3>Categories</h3>
            <div>
              <div class="list-group">
                <label class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value="" />
                  First checkbox
                </label>
                <label class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value="" />
                  Second checkbox
                </label>
                <label class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value="" />
                  Third checkbox
                </label>
                <label class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value="" />
                  Fourth checkbox
                </label>
                <label class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value="" />
                  Fifth checkbox
                </label>
              </div>
              
            </div>
        </div>
    </div>
  )
}
