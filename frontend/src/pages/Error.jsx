import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Error() {

  const error = useRouteError();

  let title = 'An Error Occurred!'
  let message = 'Something went wrong!'

  console.log(error);

  if(error.status === 500){
    message = error.data.message
  }

  if(error.status === 404){
    title = 'Page not found!'
    message = 'Could not find resource or page'
  }

  return (
    <>
    <MainNavigation/>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default Error;
