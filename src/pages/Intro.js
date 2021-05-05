import React from 'react';
import Nav from '../components/Nav'
import Prof from '../photos/ProfessionalPic.jpg'
import '../styles/App.css'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <body>
            <div class="profile-card">
                <div class="card-header">
                    <div class="pic">
                        <img src={Prof} alt="male image"></img>
                    </div>
                    <div class="name">Andrew J Cruz</div>
                    <div class="desc">Junior Full-Stack Developer</div>
                    <div class="sm">
                        <Link to='/ajdat10'>
                            <a class="fa fa-github" style={{ fontSize: '24px' }}></a>
                        </Link>

                        <a href='github.com/ajdat10' class="fa fa-linkedin" style={{ fontSize: '24px' }}></a>
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