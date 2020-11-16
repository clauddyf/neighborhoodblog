import React from 'react';
import { Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';



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

        </div>
    );
}


export default withRouter(App);