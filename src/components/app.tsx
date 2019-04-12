import React, { Suspense, lazy } from 'react';

import {BrowserRouter} from 'react-router-dom';
import Spinner from './spinner';

const Layout = lazy(() => import('./layout'));
/**
 * Application top level component. This is a good place for future
 * top level components - ErrorBoundary, Provider & Suspense, etc.
 */
export default function App() {

    return (
        <Suspense fallback={<Spinner/>}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </Suspense>
    )
}