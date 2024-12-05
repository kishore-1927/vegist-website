import React from 'react'
import bgone from './images/home-bg-one.jpg'
import bgtwo from './images/home-bg-two.webp'
import cupcake from './images/cupcake-icon.webp'
import bagel from './images/bagel-icon.webp'
import pie from './images/pie-icon.webp'
import sandwich from './images/sandwich-icon.webp'
import bread from './images/bread-icon.webp'
import biscuit from './images/biscuit-icon.webp'
import cake from './images/cake-icon.webp'
import cookie from './images/cookie-icon.webp'

import breadimg from './images/bread-img.webp'
import puffimg from './images/puffimg.webp'
import donutimg from './images/donutimg.webp'

import trending1 from './images/trending-1.webp'
import trending2 from './images/trending-2.webp'
import trending3 from './images/trending-3.webp'
import trending4 from './images/trending-4.webp'

// import favourite from './images/favourite-icon.webp'

import './Home.css'

export default function Home() {

  function leftscroll() {
    const content = document.getElementById('items-container');
    content.scrollTo(200, 0)
  }
  function rightscroll() {
    const content = document.getElementById('items-container');
    content.scrollTo(-200, 0)

  }
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className='bgone' src={bgone} class="d-block w-100" alt="..." />
            <div className='carousel-caption position-absolute bottom-50 start-25'>
              <p>Top Selling</p>
              <h1>Handmade Bakery Shop</h1>
              <button>Shop now</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src={bgtwo} class="d-block w-100" alt="..." />
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className='mt-5 mb-5'>
        <button onClick={leftscroll}>left</button>
        <button onClick={rightscroll}>right</button>

        <div className='container-md d-flex items-container gap-5' id='items-container'>

          <div class="items p-5" >
            <img src={cupcake} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Cupcake</p>
            </div>
          </div>

          <div class="items p-5" >
            <img src={bagel} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Bagel</p>
            </div>
          </div>

          <div class="items p-5" >
            <img src={pie} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Pie</p>
            </div>
          </div>

          <div class="items p-5" >
            <img src={sandwich} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Sandwich</p>
            </div>
          </div>

          <div class="items p-5" >
            <img src={bread} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Bread</p>
            </div>
          </div>

          <div class="items p-5" >
            <img src={biscuit} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Biscuit</p>
            </div>
          </div>

          <div class="items p-5" >
            <img src={cake} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Cake</p>
            </div>
          </div>

          <div class="items p-5" >
            <img src={cookie} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Cookie</p>
            </div>
          </div>
        </div>
      </div>



      <div className='shopnow-container container'>
        <div className='row'>

          <div className='col-md-4'>
            <img src={breadimg} alt="" />
            <div className='bread-content'>
              <p>Food taste</p>
              <h3>Fresh bread <br /> bakery shop</h3>
              <a href="">Shop now</a>
            </div>
          </div>
          <div className='col-md-4'>
            <img src={puffimg} alt="" />
            <div className='bread-content'>
              <p>Food taste</p>
              <h3>Fresh bread <br /> bakery shop</h3>
              <a href="">Shop now</a>
            </div>
          </div>
          <div className='col-md-4 '>
            <img src={donutimg} alt="" />
            <div className='bread-content'>
              <p>Food taste</p>
              <h3>Fresh bread <br /> bakery shop</h3>
              <a href="">Shop now</a>
            </div>
          </div>
        </div>
      </div>

      <div className='trending container'>
        <h1>Trending products</h1>

        <div className='row flex-nowrap'>

          <div class="card col-3">
            <img width={300} src={trending1} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Orange bread ball</h5>
              <p class="card-text rate">$18,00</p>
            </div>
          </div>



          <div class="card trend-item col-3">
            <img width={300} src={trending2} alt="Card image cap" />
            <div className='ms-5 gap-2 img-icons'>
              <button className='ms-3'><img width="30" height="30" src="https://img.icons8.com/ios/30/hearts--v1.png" alt="hearts--v1"/></button>
              <button><img width="30" height="30" src="https://img.icons8.com/ios/30/hearts--v1.png" alt="hearts--v1"/></button>
              <button><img width="30" height="30" src="https://img.icons8.com/ios/30/hearts--v1.png" alt="hearts--v1"/></button>
            </div>
            <div class="card-body">
              <h5 class="card-title">Orange bread ball</h5>
              <p class="card-text rate">$18,00</p>
            </div>
          </div>


          <div class="card col-3">
            <img width={300} src={trending3} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Orange bread ball</h5>
              <p class="card-text rate">$18,00</p>
            </div>
          </div>

          <div class="card col-3">
            <img width={300} src={trending4} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Orange bread ball</h5>
              <p class="card-text rate">$18,00</p>
            </div>
          </div>

          <div class="card col-3">
            <img width={300} src={trending1} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Orange bread ball</h5>
              <p class="card-text rate">$18,00</p>
            </div>
          </div>

          <div class="card col-3">
            <img width={300} src={trending1} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Orange bread ball</h5>
              <p class="card-text rate">$18,00</p>
            </div>
          </div>


        </div>


      </div>




    </div>
  )
}
