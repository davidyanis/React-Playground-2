import React, { CSSProperties } from 'react';
import SectionItem from './sectionItem';
import { checkPropTypes } from 'prop-types';
import { View } from './layout';


interface Props {
    onSectionItemClick: (view: View) => void
}

/** React function component */
export default function MainView(props: Props) {

    const sectionIds: View[] = ['Forest', 'Sky', 'Desert'];

    return (
        <div style={container}>
            {sectionIds.map((value) =>
            <SectionItem key={value} view={value} onClick={props.onSectionItemClick}/>)}
        
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