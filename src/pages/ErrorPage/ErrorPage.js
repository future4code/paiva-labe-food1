import React, { useEffect } from 'react';

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Página não encontrada :(";
  })

  return (
    <div>
      <h1>ErrorPage</h1>
    </div>
  );
}

export default ErrorPage;