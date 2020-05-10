import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';

import ToastContainer from './component/ToastContainer';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
