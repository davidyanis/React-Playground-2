import React, { CSSProperties } from 'react';
import Header from './header';
import ViewContainer from './viewContainer';
import { fullScreen } from '../css';
import ErrorBoundary from './errorBoundary';
import { checkPropTypes } from 'prop-types';

export type View = "Main" | "Forest" | "Desert" | "Sky"

/** React function component */
export default function Layout() {

    return (
            <div style={{ ...columnFlex, ...fullScreen, ...background }}>
                <Header />
                <ViewContainer />
            </div>
    );
}



const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}
