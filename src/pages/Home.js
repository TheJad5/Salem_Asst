import React from 'react';

const Home = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    fontSize: '5rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 2px rgba(0,0,0,0.5)',
  };

  return (
    <div style={styles}>Welcome to my Site</div>
  );
};

export default Home;