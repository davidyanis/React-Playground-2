import React, { CSSProperties, Suspense, lazy } from 'react';
import { checkPropTypes } from 'prop-types';
import { View } from './layout';
import Spinner from './spinner';

const SectionItem = lazy(() => import('./sectionItem'));


interface Props {}

/** React function component */
export default function MainView(props: Props) {

    const sectionIds: View[] = ['Forest', 'Sky', 'Desert'];

    return (
        <Suspense fallback={<Spinner/>}>
        <div style={container}>
            {sectionIds.map((value) =>
            <SectionItem key={value} view={value} />)}
        </div>
        </Suspense>
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