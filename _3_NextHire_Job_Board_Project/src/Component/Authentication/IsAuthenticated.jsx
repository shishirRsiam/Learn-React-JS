// Custom hook to check authentication
import { useState, useEffect } from 'react';

function isAuthenticated () {
  const [Authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log('token ->', token);
    setAuthenticated = ( token ? true : false );
  }, []);

  return Authenticated;
};

export default isAuthenticated;
