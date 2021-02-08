import React from 'react';

import { Layout } from '../Layout';

const WellcomeScreen = React.lazy(() => import("remoteComponents/WellcomeScreen"));

export const Main = () => (
    <Layout>
        <React.Suspense fallback="Loading...">
            <WellcomeScreen />
        </React.Suspense>
    </Layout>
)