import React, { CSSProperties } from 'react';

interface Props{
    onHeaderTextClick: () => void;
}

/** React function component */
export default function Header(props: Props) {

    return (
        <div style={header}>
            <h1 style={headerItem} onClick={props.onHeaderTextClick}>
            React Playground</h1>
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
    cursor: 'pointer'
};