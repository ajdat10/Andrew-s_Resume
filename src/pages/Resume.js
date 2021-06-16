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
                  <li class='engineer'>
                    <h5>Software Engineer Oct 2020 - Jan 2021</h5>
                    <h6>General Assembly</h6>
                    <li>•	Developed and design over three innovative web applications with React written on Visual Studio </li>
                    <li>•	Operated on MacOS’s terminal where NPM, GIT, Bash, ZSH, and Homebrew was used</li>
                    <li>•	Worked on different languages, such as JavaScript and Python</li>
                    <li>•	Analyzed and resolved technical and web application problems</li>
                    <li>•	Participated in code reviews, to grow and contribute to the growth around my teamwork cross-functionally to build new features and problem solving</li>
                    <li>•	Completed in-class projects, hackathons, coding challenges, databases challenges, team collaborations, debugging, and personal projects focused on real-world applications of software engineering principles and best practices</li>
                  </li>
                  <li class='doorman'>
                    <h5>Doorman/Porter Jun 2020 - Present</h5>
                    <h6>Silver Towers</h6>
                    <li>•	Ensure building security and safety for tenants to include guest registration; check identification, call to the tenant to announce the person(s) who is visiting/delivering, etc.</li>
                    <li>•	Answer the lobby phone and respond to calls accordingly</li>
                    <li>•	Perform all assigned work to ensure the safety of the building's tenants and the continuous operation of the site</li>
                    <li>•	Emptied and cleaned waste receptacles, Vacuumed rugs and carpeted areas, Polished all glass and minor building maintenance and repairs</li>
                  </li>
                  <li class='store'>
                    <h5>Store Manager Oct 2019 - Dec 2019</h5>
                    <h6>CVS Health</h6>
                    <li>•	Manage all retail in-store daily operations, verifying all incoming/outgoing cash transaction</li>
                    <li>•	Learn daily operations in the pharmacy department verifying prescriptions, account then validate specific orders, and customer service</li>
                    <li>•	Responsible for making sure the store is fully stock with proper signage not limited to pricing, sales and promotions</li>
                    <li>•	Manage all incoming shipments and maintain stock room organization</li>
                  </li>
                  <li class='hr'>
                    <h5>Human Resources Manager Oct 2017 - Oct 2019</h5>
                    <h6>BJ's Wholesale Club</h6>
                    <li>•	Partnered with the Field Recruiter to identify store-wide staffing needs</li>
                    <li>•	Routinely coordinated with other club managers to fulfill business needs in scheduling and training </li>
                    <li>•	Managed all employee payroll, processed benefits, worker's compensation, etc.</li>
                    <li>•	Insured BJ's comply with all labor laws that govern New York</li>
                  </li>
                </ul>
              </div>
              <div class='profile-education tab'>
                <h1>EDUCATION</h1>
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