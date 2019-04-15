import React from 'react';
import ReactDOM from 'react-dom';

const appRoot = document.getElementById('app-container');
const modalRoot = document.getElementById('modal-container');

interface Props {}

export default class Modal extends React.Component<Props, {} {
    /* constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    } */
}