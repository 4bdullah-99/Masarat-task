import React, { Component } from 'react';
import "./navBar.css"


function NavBar () {
    return(
      <nav class="color navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand " href="#">
      <img className='image' src='https://www.bowlesdentalcenter.com/wp-content/uploads/2021/02/logo-bowles-dental.png'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto ">
       
        
        <li class="nav-item dropdown">
          <a class=" navbar-item dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            General
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a className=" dropdown-toggle navbar-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Kids
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
         <li class="nav-item dropdown">
          <a className=" dropdown-toggle navbar-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Cosmetic
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle navbar-item " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Resotrative
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button class="button-nav  btn-outline-success" type="submit">Book Now</button>
      </form>
    </div>
  </div>
</nav>

  )
    
}
export default NavBar ; 
