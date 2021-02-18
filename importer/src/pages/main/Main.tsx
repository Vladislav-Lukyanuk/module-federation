import React from 'react';

import { Layout } from '../Layout';
import ErrorBoundary from '../../ErrorBoundary';

// @ts-ignore
const WellcomeScreen = React.lazy(() => import("components/WellcomeScreen"));

export const Main = () => (
    <Layout>
        <React.Suspense fallback="Loading...">
            <div>Something is here</div>
            <ErrorBoundary>
                <WellcomeScreen />
            </ErrorBoundary>
        </React.Suspense>
    </Layout>
)