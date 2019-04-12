import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

/** React function component */
export default function Header() {

    return (
        <div style={header}>
            <Link to="/" style={headerItem}>
                React Playground
            </Link>
        </div>
    );
}

const header: CSSProperties = {
    height: '4em',
    background: 'black',
    color: '#E1E1E1',
    display: 'flex',
    alignItems: 'stretch',
    padding: '0 1em'
};

const headerItem: CSSProperties = {
    fontSize: '1.7em',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#fff'
};