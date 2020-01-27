import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import  store  from './redux/store';
// import CakeContainer from './components/CakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import HooksCakeContainers from './components/HooksCakeContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <UserContainer />

        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainers />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
