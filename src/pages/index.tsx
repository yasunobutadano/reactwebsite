
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div> 
      <NavigationBar />
      <MainContent />

      <Footer />

    </div>
  );
};

export default Home;


