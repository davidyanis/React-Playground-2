import React from 'react';
import Layout from './layout';
import { BrowserRouter} from 'react-router-dom'

/**
 * Application top level component. This is a good place for future
 * top level components - ErrorBoundary, Provider & Suspense, etc.
 */
export default function App() {

    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    )
}