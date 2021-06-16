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
                <li onclick="tabs(0)" class="user-skills"></li>
                <li onclick="tabs(1)" class="user-experience"></li>
                <li onclick="tabs(2)" class="user-education"></li>
                <li onclick="tabs(3)" class="user-projects"></li>
              </ul>
            </div>
            <div class='profile-body'>
              <div class='profile-skills tab'>
                <h1>SKILLS</h1>
                <p>Intermediate in: JavaScript, Reactjs, MongoDB, SQL, Full Stack Developer, APIs, HTML, CSS, Programming, Front-end, Back End, Redux, GitHub, Git, Node.js, Debug, ES6, NPM, Web Application Developer
                  Basic in: Python, Ruby, Trello, C++, Chrome Developer Tools, Bootstrap, Heroku
                </p>
              </div>
              <div class='profile-experience tab'>
                <h1>EXPERIENCE</h1>
                <ul>
                  <li>
                    <h6>Software Engineer</h6>
                    <h7>General Assembly</h7>
                    <li>•	Developed and design over three innovative web applications with React written on Visual Studio </li>
                    <li>•	Operated on MacOS’s terminal where NPM, GIT, Bash, ZSH, and Homebrew was used</li>
                    <li>•	Worked on different languages, such as JavaScript and Python</li>
                    <li></li>
                    <li></li>
                  </li>
                </ul>
              </div>
              <div class='profile-education tab'>

              </div>
              <div class='profile-projects tab'>

              </div>
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