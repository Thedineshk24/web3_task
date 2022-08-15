import React from 'react';
import Dashboard from '../../components/Dashboard';

const DashboardPage = () => {
    React.useEffect(() => {
        fetch(
            // get google calender event apis here
            `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${'API_KEY'}`
        );
    }, []);
    return (
        <>
            <Dashboard />
        </>
    );
};

export default DashboardPage;
