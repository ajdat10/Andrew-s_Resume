import React from 'react';
import Prof from '../photos/ProfessionalPic.jpg'
import '../styles/App.css'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <body class="page1">
            <div class="profile-card">
                <div class="card-header">
                    <div class="pic">
                        <img src={Prof} alt="male image"></img>
                    </div>
                    <div class="name">Andrew J Cruz</div>
                    <div class="desc">Junior Full-Stack Developer</div>
                    <div class="sm">
                        <a class="fa fa-github" onClick={()=> window.open('https://github.com/ajdat10', '_blank')} style={{ fontSize: '24px' }}></a>
                        <a class="fa fa-linkedin" onClick={()=> window.open('https://www.linkedin.com/in/andrew-j-cruz', '_blank')} style={{ fontSize: '24px' }}></a>
                    
                    </div>
                    <div class='card-footer'>
                        <div class='numbers'>
                        </div>
                        <div class='item'>
                            <Link to='/resume'>
                                <button className="btn waves-effect waves-light deep-orange accent-3"  >Resume
                                <i className="material-icons right">insert_drive_file</i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </body>
    )
}