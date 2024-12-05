import React from 'react'
import './Header.css'
import logo from './images/vegist-logo.png'
import { Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <div>

        <div className='navbar first-nav'>
            <div className='d-md-block  d-none ms-5 ps-5'>
                Free shipping orders from all item
            </div>
            <div className='pe-5 me-5 d-flex gap-5 fnav-right'>
                <a>My order</a>
                <a>Track order</a>
                <a>Contact us</a>
            </div>
        </div>

        <div>
            <div className='container-md d-flex pt-4 pb-4 second-nav'>
            <div className=' d-none d-md-block'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPklEQVR4nOXVTSuEURjG8R9qvNQkFkTJ24piIaPYEDasbHwC2ZM130D2UsqMt1jY4dvp1D11msbCOLPhqqfnnLN4/j33fd3X4a+rD3MY6BZgHB84xytqpQE9eMI25tGPe6yVhOzhONYJspSBVkpBrlHN9pNRrtSbRqlm19ucj2CnFGQKl23OK2GAVYX0iMEWQPq79VKApC2ctfRoQxd0h7FYH+GwG5AZ3GRmSP0Y7gboFAexXsQtektD0gefsRz7fVx9A6qFvRudDOwoPjGRgW5bSrce5dyNge0ogtLsvGWgBbyEGTbC3pUY2LUsgmqdgD6y0vWF664DkEdQM+te4v0jjUQ6N83wnebjucCsDtSLk7B3c47aKeXc+2/dOB0Dm5JhKDuvxjXxFBdfEW3iIUK1Hj3ai4uvuKbCDP9AX46OKoo+ADMhAAAAAElFTkSuQmCC" alt="phone"/>
            <a className='phone-no' href="">+91 96550 94620</a>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className=' d-flex gap-5'>
                <a href=""><img width="30" height="30" src="https://img.icons8.com/ios/100/user--v1.png" alt="user--v1"/></a>
                <a href=""><img width="30" height="30" src="https://img.icons8.com/ios/30/hearts--v1.png" alt="hearts--v1"/></a>
                <a href=""><img width="30" height="30" src="https://img.icons8.com/external-outline-design-circle/30/external-Hand-Bag-seo-web-optimization-outline-design-circle.png" alt="external-Hand-Bag-seo-web-optimization-outline-design-circle"/></a>
            </div>
        </div>
        </div>

        <div>
            <div className='navbar container-md d-flex third-nav pt-4'>
                <div className='menu d-flex gap-5 '>
                <a href="/home" className='active'>HOME</a>
                <a href="/shop">SHOP</a>
                <a href="">PAGES</a>
                <a href="">BLOGS</a>
                <a href="">FEATURES</a>
                </div>
                <div className='w-auto search-container d-flex pb-2'>
                    <input className='third-nav-search p-2' type="search" placeholder='search our store' name="" id="" />
                    <button className='search-btn'><img width="20" height="20" src="https://img.icons8.com/ios/30/search--v1.png" alt="search--v1"/></button>
                </div>
            </div>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
