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
        savedArticles={props.savedArticles}
        unsaveArticle={props.unsaveArticle}
      /> 
      :
      <Navigate to='/' />
  );
}

export default ProtectedRoute;