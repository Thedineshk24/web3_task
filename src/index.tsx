import './styles/index.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import configureAppStore, { getPreloadedState } from './store/configureStore';

import AppContextProvider from './contexts/AppContextProvider';

import { DashboardPage, SignUpForm, StatsPage } from './pages';

(async () => {
    const preloadedState = getPreloadedState();

    const root = createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <ReduxProvider store={configureAppStore(preloadedState)}>
                <AppContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<SignUpForm />} />
                            <Route path="/stats" element={<StatsPage />} />
                            <Route
                                path="/dashboard"
                                element={<DashboardPage />}
                            />
                        </Routes>
                    </BrowserRouter>
                </AppContextProvider>
            </ReduxProvider>
        </React.StrictMode>
    );
})();
