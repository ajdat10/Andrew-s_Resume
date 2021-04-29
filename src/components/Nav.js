import { TableBody } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <body>

            <nav>
                <div class="nav-wrapper">
                    <a><Link class="brand-logo center">Logo</Link></a>
                    {/* <a><Link data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></Link></a> */}
                </div>
            </nav>
            {/* <ul id="slide-out" class="sidenav">
                <li><a href="#"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#">Second Link</a></li>
            </ul> */}
        </body>

    )
}
export default Nav
