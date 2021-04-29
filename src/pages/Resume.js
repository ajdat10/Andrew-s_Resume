import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
return (
    <div>

    <h1>It works</h1>
    <Link to='/'>
                <button className="btn waves-effect waves-light blue" style={{ marginRight: '20px' }} name="action">Home
                <i className="material-icons right">directions_car</i>
                </button>
              </Link>
    </div>
)
}