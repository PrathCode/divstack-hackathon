import React, { Component, useState, useEffect } from 'react';
import Modal from 'react-responsive-modal';
import baseApi from '../../api/baseApi';

function Header() {
   useEffect(() => {
      loginTest();
   });

   async function loginTest() {
      await baseApi
         .post('/login', {
            email: 'test2@gmail.com',
            password: 'password',
         })
         .then(function (response) {
            console.log('Hello! Logged in');
         })
         .catch(function (error) {
            console.log(error);
         });
   }

   return (
      <div>
         <nav class='navbar sticky-top navbar-expand-lg custom-navbar'>
            <div class='container-fluid cust-navbar-div'>
               <a class='navbar-brand' href='#'>
                  <img src='./images/logo.png' alt='' width='250' height='70' />
               </a>
               <button
                  class='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNavAltMarkup'
                  aria-controls='navbarNavAltMarkup'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
               >
                  <span class='navbar-toggler-icon'></span>
               </button>
               <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
                  <div class='navbar-nav w-50'>
                     <a class='nav-link custom-nav-links' href='/'>
                        Home
                     </a>
                     <a class='nav-link custom-nav-links' href='/courses'>
                        Course
                     </a>
                     <a class='nav-link custom-nav-links' href='#'>
                        Pricing
                     </a>
                     <button
                        type='button'
                        class='btn btn-outline-secondary'
                        id='login'
                        onClick={() => {
                           loginTest();
                        }}
                     >
                        Login
                     </button>
                     <button type='button' class='btn btn-warning' id='signUp'>
                        Signup
                     </button>
                  </div>
               </div>
            </div>
         </nav>
      </div>
   );
}

export default Header;
