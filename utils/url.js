// Use on the frontend (React components) to get domain
export const getDomainFromWindow = () => {
  // First, check if this function is being called on the frontend. If so, get domain from window
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  return null;
};

// Use on the backend (API, getServerSideProps) to get the host domain
export const getDomainFromRequest = (req) => {
  const host = req.headers.host || '';
  const protocol = req.headers['x-forwarded-proto'] ? 'https://' : 'http://';

  return protocol + host;
};
