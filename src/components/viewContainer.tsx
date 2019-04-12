import React, { CSSProperties, Suspense, lazy } from 'react';
import { Route } from 'react-router';
import Spinner from './spinner';
import ErrorBoundary from './errorboundary';
import { checkPropTypes } from 'prop-types';


const DetailView = lazy(() => import('./detailView'));
const MainView = lazy(() => import('./mainView'));


/** React function component */
export default function ViewContainer() {

    return (
        <ErrorBoundary fallbackUI={<Spinner />}>
        <Suspense fallback={<Spinner/>}>
            <div style={container}>
                <Route exact path="/" component={MainView} />
                <Route path="/forest" render={ () => <DetailView view="Forest"/>} />
                <Route path="/sky" render={ () => <DetailView view="Sky"/>} />
                <Route path="/desert" render={ () => <DetailView view="Desert"/>} />
            </div>
        </Suspense>
        </ErrorBoundary>

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

