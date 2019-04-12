import React, { CSSProperties } from 'react';
import { PropagateLoader } from 'react-spinners';
import { centeredContent, fullScreen } from '../css';

export default function() {
    return (
        <div style={{...centeredContent, ...fullScreen}}>
            <PropagateLoader color="white" size={1.5} sizeUnit="em" />
        </div>
    );
}

const appearance: CSSProperties = {
    color: 'white',
    fontSize: '1.5em'
}