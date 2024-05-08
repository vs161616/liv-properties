import React from 'react';
// import Header from './component/comman/Header';
import Header from './Component/comman/Header'
import MainRoutes from './MainRoutes';
// import Footer from './component/comman/Footer';
// import Home from './component/pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="MainBg">
      <Header />
      <MainRoutes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
