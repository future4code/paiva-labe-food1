import React, { useEffect } from 'react';

const SplashScreen = () => {
  useEffect(() => {
    document.title = "Tela inicial";
  })

  return (
    <div>
      <h1>Tela inicial</h1>
    </div>
  );
}

export default SplashScreen;