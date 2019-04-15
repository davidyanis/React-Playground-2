import React, { CSSProperties, createElement } from 'react'
import ReactDOM, { createPortal } from 'react-dom'


const appRoot = document.getElementById('app-container');
const modalRoot = document.getElementById('modal-container');

interface Props {
    
}

export default class Modal extends React.Component<Props, {}> {
    render() {

        return createPortal(
            this.props.children,
            modalRoot!
        )
    }
  
}
