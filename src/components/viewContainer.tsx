import React, { CSSProperties } from 'react';
import MainView from './mainView';
import { View } from './layout';
import DetailView from './detailView';

interface Props {
    onSectionItemClick: (view: View) => void
    view: View
}


/** React function component */
export default function ViewContainer(props: Props) {

    return (
        <div style={container}>
            {props.view === "Main" ? 
                <MainView onSectionItemClick={props.onSectionItemClick} /> :
                <DetailView view={props.view} />
            }
        </div>
        
    );
    
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em',
    justifyItems: 'stretch',
    alignItems: 'stretch',
    gridTemplateColumns: '50% 50%',
}

