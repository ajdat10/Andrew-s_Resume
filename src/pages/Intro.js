import React from 'react';
import Nav from '../components/Nav'
import Pic from '../photos/ProfessionalPic.jpg'
import '../styles/App.css'

export default () => {
    return (
        <div>
            <div class="row">
                <div class="col">
                    <div class="card-panel teal">
                        <h1> We Are Running</h1>
                        <img id="mainPic" src={Pic} alt='image of man' />
                    </div>
                </div>
            </div>

        </div>
    )
}