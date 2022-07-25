import React from 'react';
import SavedNews from '../SavedNews/SavedNews';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, loggedIn, ...props }) {

  return (
    loggedIn ? 
      <SavedNews 
        handleSignout={props.handleSignout}
      /> 
      :
      <Navigate to='/' />
  );
}

export default ProtectedRoute;