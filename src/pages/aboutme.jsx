import React from "react";
import '../App.css';
import profPic from '../images/profile_picture.jpg'


function AboutMe () {
    return (
        <div>
           
            <img src={profPic} alt="headshot of author" height={"400px"} />
            <h1>Robert Holeman</h1>
            <p>
                I am currently a senior studying Computer Engineering at Iowa State University.
            </p>

            
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary" style={{width: "100%", height: "300px", borderRadius: "21px 21px 21px 21px"}}>
    <div class="col-md-6 p-lg-5 mx-auto my-5">
      <h1 class="display-3 fw-bold">Designed for engineers</h1>
      <h3 class="fw-normal text-muted mb-3">Build anything you want with Aperture</h3>
      <div class="d-flex gap-3 justify-content-center lead fw-normal">
        
      </div>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

  <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3" >
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Another headline</h2>
        <p class="lead">And an even wittier subheading.</p>
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </div>
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Another headline</h2>
        <p class="lead">And an even wittier subheading.</p>
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </div>
    
  </div>

  







        </div>
    )
  };
  
  export default AboutMe;