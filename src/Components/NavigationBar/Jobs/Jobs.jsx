import React from 'react';
import { useSelector } from 'react-redux';

const Jobs = () => {
    const { isLoggedIn } = useSelector(state=>state.Auth);
    return (
        <div className={`btn btn-ghost underline mx-2 ${isLoggedIn&&'hidden'}`}>
            Jobs
        </div>
    );
};

export default Jobs;