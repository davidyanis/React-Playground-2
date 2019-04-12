import React, { CSSProperties, createElement } from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router';
import DetailView from './detailView';

const appRoot = document.getElementById('app-container');
const modalRoot = document.getElementById('modal-container');


export default class Modal extends React.Component{
    /* constructor(props) {
        super(props)
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }
    
    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }
    render() {
        return ReactDOM.createPortal(
            <DetailView />,
            domNode
        );
    } */
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