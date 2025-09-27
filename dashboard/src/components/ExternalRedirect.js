import { useEffect } from 'react';

const ExternalRedirect = ({ to }) => {
  useEffect(() => {
    // This performs the actual redirect to the external URL
    window.location.href = to;
  }, [to]);

  // This component doesn't need to render anything
  return null; 
};

export default ExternalRedirect;