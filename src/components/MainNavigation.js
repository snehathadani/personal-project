import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchBox from './SearchBox'


class MainNavigation extends Component {
    render() {
        return(
        <header className='MainNav'>
            <SearchBox/>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/explore'>Explore</Link></li>
                </ul>
            </nav>
        </header>
        );
    }
}

export default MainNavigation;