import React from 'react';

import { Layout } from '../Layout';

// @ts-ignore
const WellcomeScreen = React.lazy(() => import("components/WellcomeScreen"));

export const Main = () => (
    <Layout>
        <React.Suspense fallback="Loading...">
            <div>Something is here</div>
            <WellcomeScreen />
        </React.Suspense>
    </Layout>
)