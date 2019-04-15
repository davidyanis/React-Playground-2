import React, { CSSProperties } from 'react'
import { View } from './layout';

import Modal from './modal';

interface Props {
    view: View
}

export default class DetailView extends React.Component<Props, {}> {
    state = { show: false }

    toggleModal = () => {
        this.setState({ show: !this.state.show })
    }
    
    private imageSource = `../../assets/${this.props.view}.jpg`

    private get renderModal () {
        if (this.state.show) {
            return (
                <Modal>
                    <h1>Modal</h1>
                </Modal>
            )
        }
    }
    
    
    render () {
        return (
            <div style={root}>
                <button onClick={this.toggleModal} style={{...buttonStyle, ...centeredAbsolute}}>Öppna</button>
                <img style={image} src={this.imageSource} />
                {this.renderModal}
            </div>
           
        );
    }
}



const root: CSSProperties = {
    flexGrow: 1
}

const ModalStyle: CSSProperties = {

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
