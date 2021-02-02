import React from 'react';
import Nav from './Nav';
import { RichText } from 'prismic-reactjs'

const Header = ({ title, img }) => {
    
    return (
        <header className="header">
            <Nav />
            <RichText render={title} />
            
            <style jsx>{`
                .header {
                    background: url(${img.url});
                    background-position: center;
                    background-size: cover;
                }
            `}</style>
        </header>

        
    );
};

export default Header;