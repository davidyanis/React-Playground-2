import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom'
import { View } from './layout';
import Spinner from './spinner';
import { withRouter } from 'react-router';


interface Props {
    view: View
}

export default class DetailView extends React.Component<Props, {}> {
    
    private imageSource = `../../assets/${this.props.view}.jpg`
    render () {
        return (
            <div style={root}>
                <img style={image} src={this.imageSource} />
            {/*  <h1 style={ centeredAbsolute }>{props.view}</h1> */}
                <button style={ {...centeredAbsolute,  ...buttonStyle } }>Klicka på mig</button>
            </div>
        );
    }

    private Child() {
        return (
            <div className="modal">
                <button>Click me</button>
            </div>
        )
    }
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

const buttonStyle: CSSProperties = {
    fontSize: '1.5em',
    padding: '0.5em',
    backgroundColor: 'white',
    border: 'none'
}