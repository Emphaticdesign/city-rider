import React from 'react';
import { useHistory } from 'react-router';
import './header.css';



const Header = () => {

    return (
        <div className="header-main">
            <div>
                <p>City Rider</p>
            </div>
            <div className="link-tags">
                <a href="/home">Home</a>
                <a href="/destination">Destination</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Header;