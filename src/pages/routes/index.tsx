import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Jobs from '../Jobs';
import JobDetails from '../JobDetails';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Login from '../Login';
import Register from '../Register';
import MustLoginWarning from '../MustLoginWarning';

function RoutesList() {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/jobs" Component={Jobs} />
            <Route path="/jobs/details/:param/:id" element={
                <>
                    <SignedIn>
                        <JobDetails />
                    </SignedIn>
                    <SignedOut>
                        <MustLoginWarning />
                    </SignedOut>
                </>
            } />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
        </Routes>
    )
};

export default RoutesList;