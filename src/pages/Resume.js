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
        <div class='address'>
          <p class="state">New York,</p>

        </div>
      </div>
    </div>
  )
}

{/* <Link to='/'>
<button className="btn waves-effect waves-light blue" style={{ marginRight: '20px' }} name="action">Home
<i className="material-icons right">directions_car</i>
</button>
</Link> */}