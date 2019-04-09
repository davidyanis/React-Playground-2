import React, { CSSProperties } from 'react'
import { View } from './layout';

interface Props {
    view: View
}
export default function DetailView(props: Props) {

    const imageSource = `../../assets/${props.view}.jpg`

    return (
        <div style={root}>
            <img src={imageSource} />
        </div>
    );
}

const root: CSSProperties = {
    flexGrow: 1
}

const image: CSSProperties = {
    objectFit: 'cover'
}