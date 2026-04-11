import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import JobFeed from './job_feed/job_feed';
import JobView from './job_view/job_view';
import NotFound from './error_pages/not_found';

const AppReact: React.FC = () => {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" replace />} />
        <Route path="/jobs/" element={<JobFeed />} />
        <Route path="/jobs/view/" element={<JobView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppReact;

