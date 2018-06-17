import React from 'react';

const Header = ({ children }) => {
    return (
        <div style={{
            width: '100vw',
            minHeight: '90px',
            position: 'fixed',
            top: '0',
            left: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
           opacity: '.85',
            zIndex: '100',
            background: 'black'
                       
        }}>
            {children}
        </div>
    );
}

export default Header;