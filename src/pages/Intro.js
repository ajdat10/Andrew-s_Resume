import React from 'react';
import Nav from '../components/Nav'
import Pic from '../photos/ProfessionalPic.jpg'
import '../styles/App.css'
import {Link} from 'react-router-dom'

export default () => {
    return (
        <body>
            <div class="row">
                <div class="col">
                    <div class="card-panel blue-grey darken-4">
                        <h1> We Are Running</h1>
                        <img id="mainPic" src={Pic} alt='image of man' />
                        <Link to='/resume'>
                <button className="btn waves-effect waves-light blue" style={{ marginRight: '20px' }} name="action">Sign in
                <i className="material-icons right">directions_car</i>
                </button>
              </Link>
                    </div>
                </div>
            </div>

        </body>
    )
}