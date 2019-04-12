import React, { CSSProperties } from 'react'
import { View } from './layout';
import Spinner from './spinner';


interface Props {
    view: View
}

export default function DetailView(props: Props) {
    
    const imageSource = `../../assets/${props.view}.jpg`

    return (
        <div style={root}>
            <img style={image} src={imageSource} />
            <h1 style={ centeredAbsolute }>{props.view}</h1>
        </div>
    );
}

const root: CSSProperties = {
    flexGrow: 1
}

const image: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}

const centeredAbsolute: CSSProperties = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}