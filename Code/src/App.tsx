import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {MainRoutes} from './routes/Routes';
import InnerContent from './components/InnerContent';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <InnerContent/>
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;