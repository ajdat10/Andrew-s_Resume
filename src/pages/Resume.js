import React from 'react'
import { Link } from 'react-router-dom'
// import '../styles/Resume.css'
import Prof from '../photos/ProfessionalPic.jpg'
export default () => {
  return (
    <div class="container">
      <div class='profile-header'>
        <div class='profile-img'>
          <img src={Prof} alt="male image" width='200'></img>
        </div>
        <div class='profile-nav-info'>
          <h3 class='user-name'>Andrew J Cruz</h3>
        </div>
        <div>
          <p class="job-title">Software Engineer</p>
        </div>
        <div class='address'>
          <p class="city/state">Brooklyn, NY</p>
        </div>
        <div class="main-bd">
          <div class="left-side">
            <p class="modile-number">
              <i class="fa fa-phone"> (718)-844-1817</i>
            </p>
            <div class="user-email">
              <i class="fa fa-envelope"> Andrew.j.cruz10@gmail.com</i>
            </div>
            <div class="user-bio">
              <p class="bio">I am a software engineer who has a passion in the auto industry. During the journey of becoming a full stack engineer I was exposed to front-end developing where I participated in projects that dynamically changed what a website could look like. With my devotion and creativity, I believe I can be the bridge between the auto industry and how they are presented in a web development aspect.</p>
            </div>
          </div>
          <div class="right-side">
            <div class="nav">
              <ul>
                <li onclick="tabs(0)" class="user-job-experience"></li>
                <li onclick="tabs(0)" class="user-job-education"></li>
                <li onclick="tabs(0)" class="user-job-experience"></li>
              </ul>
            </div>
          </div>
        </div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  )
}

{/* <Link to='/'>
<button className="btn waves-effect waves-light blue" style={{ marginRight: '20px' }} name="action">Home
<i className="material-icons right">directions_car</i>
</button>
</Link> */}