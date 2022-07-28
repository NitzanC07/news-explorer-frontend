import React from 'react';
import SavedNews from '../SavedNews/SavedNews';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, loggedIn, ...props }) {

  return (
    loggedIn ? 
      <SavedNews 
        loggedIn={loggedIn}
        handleSignOut={props.handleSignOut}
        articles={props.articles}
      /> 
      :
      <Navigate to='/' />
  );
}

export default ProtectedRoute;