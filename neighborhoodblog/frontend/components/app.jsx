import React from 'react';
import { Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';
import MapsContent from './maps/map_show'


const App = () => {
    return (
        <div>
            
            <header className="nav-bar">
                
                <Link to="/" className='header-link'>
                    <div className='logo-name'>
                        Neighborhood Blog
                    </div>
                </Link>
                
            </header>
            <Switch>
                <Route path='/' component={MapsContent}/>
            </Switch>
        </div>
    );
}


export default withRouter(App);